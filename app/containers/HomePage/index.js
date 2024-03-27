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
import HomePageHeader from '../../components/HomeSection/Header';
import FrontSection from '../../components/HomeSection/FrontSection';
import ReviewSection from '../../components/HomeSection/ReviewSection';
import SubjectSection from '../../components/HomeSection/SubjectSection';

const key = 'home';

const mapStateToProps = createStructuredSelector({});

export function HomePage() {
  return (
    <>
      <HomePageHeader />
      <FrontSection />
      <ReviewSection />
      <SubjectSection />
    </>
  );
}

HomePage.propTypes = {};

export default HomePage;
