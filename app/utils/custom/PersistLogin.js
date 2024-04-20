import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import useRefreshToken from './hooks/useRefreshToken';
import useAuth from './hooks/useAuth';
import LoadingIndicator from '../../components/LoadingIndicator';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        // eslint-disable-next-line no-unused-expressions
        isMounted && setIsLoading(false);
      }
    };
    // eslint-disable-next-line no-unused-expressions
    !auth.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  if (!persist) {
    return <Outlet />;
  }
  return <>{isLoading ? <LoadingIndicator /> : <Outlet />}</>;
};

export default PersistLogin;
