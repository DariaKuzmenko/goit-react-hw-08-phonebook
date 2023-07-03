import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthorized, selectIsRefreshing } from 'redux/selectors';

export const RestrictedRoute = ({ element: Component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isAuthorized && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
