/**
 *
 * AdminDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAdminDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({});

export function AdminDashboard() {
  useInjectReducer({ key: 'adminDashboard', reducer });
  useInjectSaga({ key: 'adminDashboard', saga });

  return <h1>Dashboard</h1>;
}

AdminDashboard.propTypes = {};

export default AdminDashboard;
