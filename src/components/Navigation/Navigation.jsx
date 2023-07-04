import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/selectors';
import { Navigate } from './Navigation.styled';

export const Navigation = () => {
  const isAutorizated = useSelector(selectIsAuthorized);

  return (
    <Navigate>
      <NavLink to="/">Home</NavLink>
      {isAutorizated && <NavLink to="/contacts">Contacts</NavLink>}
    </Navigate>
  );
};
