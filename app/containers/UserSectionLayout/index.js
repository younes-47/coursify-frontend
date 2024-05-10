/**
 *
 * UserSectionLayout
 *
 */

import React, { useEffect, useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarsIcon from '@mui/icons-material/Stars';
import { createStructuredSelector } from 'reselect';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import UserSectionHeader from '../../components/UserSection/Header';
import Layout from '../../components/UserSection/Layout';
import UserSectionNavigation from '../../components/UserSection/Navigation';
import useAuth from '../../utils/custom/hooks/useAuth';
import { cleanupStore, getUserInfoAction } from './actions';
import {
  makeSelectGetUserInfoError,
  makeSelectGetUserInfoSuccess,
  makeSelectUserInfo,
} from './selectors';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserInfo(),
  getUserDataSuccess: makeSelectGetUserInfoSuccess(),
  getUserDataError: makeSelectGetUserInfoError(),
});

export function UserSectionLayout() {
  useInjectReducer({ key: 'userSectionLayout', reducer });
  useInjectSaga({ key: 'userSectionLayout', saga });
  useAxiosPrivate();

  const location = useLocation();
  const navigate = useNavigate();

  const { userData } = useSelector(mapStateToProps);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const { userInfo, setUserInfo } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo === null) {
      dispatch(getUserInfoAction());
    }
  }, [userInfo]);

  useEffect(() => {
    if (userData !== null) {
      setUserInfo(userData);
    }
  }, [userData]);

  useEffect(() => () => dispatch(cleanupStore()), []);

  return (
    <CssVarsProvider disableTransitionOnChange>
      {/* <CssBaseline /> */}
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <UserSectionNavigation />
        </Layout.SideDrawer>
      )}
      <Stack
        id="tab-bar"
        direction="row"
        justifyContent="space-around"
        spacing={1}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          zIndex: '999',
          bottom: 0,
          position: 'fixed',
          width: '100%',
          py: 2,
          backgroundColor: 'background.body',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Button
          variant="plain"
          color="neutral"
          component="a"
          size="sm"
          startDecorator={<HomeIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
          onClick={() =>
            navigate('/home', { state: { from: location.pathname } })
          }
        >
          Acceuil
        </Button>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          size="sm"
          startDecorator={<BookmarkIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
          onClick={() =>
            navigate('/mycourses', { state: { from: location.pathname } })
          }
        >
          Mes Cours
        </Button>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          size="sm"
          startDecorator={<StarsIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
          onClick={() =>
            navigate('/enroll', { state: { from: location.pathname } })
          }
        >
          S&apos;inscrire
        </Button>
      </Stack>
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
          <UserSectionHeader />
        </Layout.Header>

        <Layout.SideNav>
          <UserSectionNavigation />
        </Layout.SideNav>

        <Layout.Main>
          <Outlet />
        </Layout.Main>

        {/* This div fixes the overlapping of the bottom nav */}
        <div style={{ height: '80px' }}></div>
      </Layout.Root>
    </CssVarsProvider>
  );
}

UserSectionLayout.propTypes = {};
export default UserSectionLayout;
