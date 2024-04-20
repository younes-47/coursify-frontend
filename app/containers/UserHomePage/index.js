/**
 *
 * UserHomePage
 *
 */

import React from 'react';

import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({});

export function UserHomePage() {
  useInjectReducer({ key: 'userHomePage', reducer });
  useInjectSaga({ key: 'userHomePage', saga });

  return <h1>This is Home Page</h1>;
}

UserHomePage.propTypes = {};

export default UserHomePage;
