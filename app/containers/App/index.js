/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PasswordResetPage from 'containers/PasswordResetPage/Loadable';
import UserHomePage from 'containers/UserHomePage/Loadable';
import AdminSectionLayout from 'containers/AdminSectionLayout/Loadable';
import UserSectionLayout from 'containers/UserSectionLayout/Loadable';
import UserMyCoursesPage from 'containers/UserMyCoursesPage/Loadable';
import UserProfilePage from 'containers/UserProfilePage/Loadable';
import AdminDashboard  from 'containers/AdminDashboard';
import VerificationPage from 'containers/VerificationPage/Loadable';
import AdminSettings from '../AdminSettings/Loadable';
import AdminCourses from '../AdminCourses/Loadable';
import AdminCoursesAdd from '../AdminCoursesAdd/Loadable';


import GlobalStyle from '../../global-styles';
import { AuthProvider } from '../../utils/custom/context/AuthProvider';
import RequireAuth from '../../utils/custom/RequireAuth';

import PersistLogin from '../../utils/custom/PersistLogin';
import HomeRedirector from '../../utils/custom/HomeRedirector';

const theme = {
  palette: {
    darkBrown: '#551E19',
    lightBrown: '#C56E33',
    lightGreen: '#A8C686',
    darkGreen: '#7A804D',
    lightYellow: '#F2EE7D',
    darkYellow: '#A38800',
    darkBlue: '#044576',
    lightBlue: '#087CA7',
    darkPurple: '#7F5A83',
    lightPurple: '#B185A7',
    darkOrange: '#FF8C42',
    lightOrange: '#F9C784',
    darkRed: '#CA3C25',
    lightGray: '#E7EFE9',
  },
};

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          
          {/*  public routes */}
          <Route element={<PersistLogin />}>
            <Route element={<HomeRedirector />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/Signup" element={<SignupPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Verify" element={<VerificationPage />} />
              <Route path="/Verify/token/:token/email/:email" element={<VerificationPage />} />
              <Route path="/Password-reset" element={<PasswordResetPage />} />
              <Route path="/Password-reset/token/:token/email/:email" element={<PasswordResetPage />} />
            </Route>
          </Route>
            

          {/* user routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRole="user" />}>
              <Route element={<UserSectionLayout />}>
                <Route path="/home" element={<UserHomePage />} />
                <Route path="/mycourses" element={<UserMyCoursesPage />} />
                <Route path="/myprofile" element={<UserProfilePage />} />
              </Route>
            </Route>
          </Route>

          {/* admin routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRole="admin" />}>
              <Route element={<AdminSectionLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/settings" element={<AdminSettings />} />
                <Route path="/admin/courses" element={<AdminCourses />} />
                <Route path="/admin/courses/add" element={<AdminCoursesAdd />} />
              </Route>
            </Route>
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}
