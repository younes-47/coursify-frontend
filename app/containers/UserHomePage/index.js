/**
 *
 * UserHomePage
 *
 */

import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Typography } from '@mui/joy';
import reducer from './reducer';
import saga from './saga';
import useAuth from '../../utils/custom/hooks/useAuth';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';

export function UserHomePage() {
  useInjectReducer({ key: 'userHomePage', reducer });
  useInjectSaga({ key: 'userHomePage', saga });
  useAxiosPrivate();

  const { userInfo } = useAuth();

  return (
    <Typography level="h2" color="neutral">
      Bonjour {userInfo?.firstName} !
    </Typography>
  );
}

UserHomePage.propTypes = {};

export default UserHomePage;
