import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/selectors';

export const RestrictedRoute = ({ element: Component, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return isAuthorized ? <Navigate to={redirectTo} /> : Component;
};
