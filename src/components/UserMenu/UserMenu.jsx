import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth;

  const handleButtonClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcom, {user}</p>
      <button type="button" onClick={handleButtonClick}>
        Logout
      </button>
    </div>
  );
};
