import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom/dist';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRole }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.role === allowedRole ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

RequireAuth.propTypes = {
  allowedRole: PropTypes.string.isRequired,
};
