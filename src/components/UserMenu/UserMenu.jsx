import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth';
import { selectUser } from 'redux/selectors';
import { MenuBtn, MenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleButtonClick = () => {
    dispatch(logoutUser());
  };

  return (
    <MenuWrapper>
      <p>Welcom, {user}</p>
      <MenuBtn type="button" onClick={handleButtonClick}>
        Logout
      </MenuBtn>
    </MenuWrapper>
  );
};
