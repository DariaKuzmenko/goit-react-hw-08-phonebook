import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/selectors';

export const Navigation = () => {
  const navigate = useNavigate();
  const isAutorized = useSelector(selectIsAuthorized);
  const handleContactsBtn = e => {
    navigate('/contacts');
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAutorized && (
        <button size="small" to="/contacts" onClick={handleContactsBtn}>
          Contacts
        </button>
      )}
    </nav>
  );
};
