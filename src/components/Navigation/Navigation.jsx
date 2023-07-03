import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/selectors';

export const Navigation = () => {
  const isAutorized = useSelector(selectIsAuthorized);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAutorized && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
