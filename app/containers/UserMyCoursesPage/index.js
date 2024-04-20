/**
 *
 * UserMyCoursesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserMyCoursesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({});
export function UserMyCoursesPage() {
  useInjectReducer({ key: 'userMyCoursesPage', reducer });
  useInjectSaga({ key: 'userMyCoursesPage', saga });

  return <h1>This is my Courses Page</h1>;
}

UserMyCoursesPage.propTypes = {};

export default UserMyCoursesPage;
