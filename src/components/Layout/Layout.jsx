import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/selectors';

export const Layout = () => {
  const isAutorizated = useSelector(selectIsAuthorized);

  return (
    <>
      <header>
        <Navigation />
        {isAutorizated ? <UserMenu /> : <AuthNav />}
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
