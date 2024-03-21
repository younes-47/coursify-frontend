/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePageHeader from '../../components/HomePage/HomePageHeader';

const key = 'home';

const mapStateToProps = createStructuredSelector({});

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <>
      <HomePageHeader />
    </>
  );
}

HomePage.propTypes = {};

export default HomePage;
