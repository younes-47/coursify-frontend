import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';

export default function HomeRedirector() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.accessToken) {
      if (auth.role === 'admin') {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/home', { replace: true });
      }
    }
  }, []);
  return <Outlet />;
}
