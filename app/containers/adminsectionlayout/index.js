/**
 *
 * AdminSectionLayout
 *
 */

import React, { useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import { Outlet } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/AdminSection/Sidebar';
import Header from '../../components/AdminSection/Header';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import {
  makeSelectAdminInfo,
  makeSelectGetAdminInfoError,
  makeSelectGetAdminInfoSuccess,
  makeSelectGettingAdminInfo,
} from './selectors';
import useAuth from '../../utils/custom/hooks/useAuth';
import { getAdminInfoAction } from './actions';

const mapStateToProps = createStructuredSelector({
  adminData: makeSelectAdminInfo(),
  gettingAdminInfo: makeSelectGettingAdminInfo(),
  getAdminInfoSuccess: makeSelectGetAdminInfoSuccess(),
  getAdminInfoError: makeSelectGetAdminInfoError(),
});

export function AdminSectionLayout() {
  useInjectReducer({ key: 'adminSectionLayout', reducer });
  useInjectSaga({ key: 'adminSectionLayout', saga });
  useAxiosPrivate();

  const { adminData } = useSelector(mapStateToProps);
  const { userInfo, setUserInfo } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo === null) {
      dispatch(getAdminInfoAction());
    }
  }, [userInfo]);

  useEffect(() => {
    if (adminData !== null) {
      setUserInfo(adminData);
    }
  }, [adminData]);

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar />
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 'calc(12px + var(--Header-height))', md: 3 }, // top padding
            pb: { xs: 2, sm: 2, md: 3 }, // bottom padding
            px: { xs: 2, sm: 2, md: 3 }, // sides padding
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

export default AdminSectionLayout;
