/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import HomePageHeader from '../../components/HomeSection/Header';
import FrontSection from '../../components/HomeSection/FrontSection';
import ReviewSection from '../../components/HomeSection/ReviewSection';
import SubjectSection from '../../components/HomeSection/SubjectSection';
import Footer from '../../components/HomeSection/Footer';
import JoinSection from '../../components/HomeSection/JoinSection';

export function HomePage() {
  return (
    <>
      <HomePageHeader />
      <FrontSection />
      <ReviewSection />
      <SubjectSection />
      <JoinSection />
      <Footer />
    </>
  );
}

HomePage.propTypes = {};

export default HomePage;
