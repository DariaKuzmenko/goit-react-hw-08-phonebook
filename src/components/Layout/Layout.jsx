import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const { isAutorizated } = useAuth();

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
