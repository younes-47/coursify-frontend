/**
 *
 * UserCourseContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserCourseContent from './selectors';
import reducer from './reducer';
import saga from './saga';

UserCourseContent.propTypes = {};

export function UserCourseContent() {
  useInjectReducer({ key: 'userCourseContent', reducer });
  useInjectSaga({ key: 'userCourseContent', saga });

  return <div>:°)</div>;
}

const mapStateToProps = createStructuredSelector({});

export default UserCourseContent;
