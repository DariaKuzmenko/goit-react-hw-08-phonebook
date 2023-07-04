import { useSelector } from 'react-redux';
import {
  selectIsAuthorized,
  selectIsRefreshing,
  selectUser,
} from 'redux/selectors';

export const useAuth = () => {
  const isAutorized = useSelector(selectIsAuthorized);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isAutorized,
    isRefreshing,
    user,
  };
};
