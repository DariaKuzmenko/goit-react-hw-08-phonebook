import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/selectors';
import { Header } from './Layout.styled';

export const Layout = () => {
  const isAutorizated = useSelector(selectIsAuthorized);

  return (
    <>
      <Header>
        <Navigation />
        {isAutorizated ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
