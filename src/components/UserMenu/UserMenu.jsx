import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth';

import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
