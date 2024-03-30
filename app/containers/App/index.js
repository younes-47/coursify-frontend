/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { Helmet } from 'react-helmet';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

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
    lightGray: '#E7EFE9',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Signup" component={SignupPage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
