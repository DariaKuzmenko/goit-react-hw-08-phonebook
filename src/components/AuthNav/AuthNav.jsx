import { NavLink } from 'react-router-dom';
import { AuthNavComponent } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavComponent>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </AuthNavComponent>
  );
};
