import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { selectIsRefreshing } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/auth';
import { useEffect } from 'react';

// const Home = lazy(() => import('../pages/Home'));
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));
// const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<Register />} />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<Login />} />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" element={<Contacts />} />
            }
          ></Route>
        </Route>
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    )
  );
};
