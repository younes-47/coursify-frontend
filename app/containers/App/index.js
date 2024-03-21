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
import NotFoundPage from 'containers/NotFoundPage/Loadable';

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
  colors: {
    darkBrown: '#551E19',
    lightBrown: '#C56E33',
    lightGreen: '#A8C686',
    darkGreen: '#7A804D',
    lightYellow: '#EFEA5A',
    darkYellow: '#A38800',
    darkBlue: '#044576',
    lightBlue: '#087CA7',
    darkPurple: '#7F5A83',
    lightPurple: '#B185A7',
    darkOrange: '#FF8C42',
    lightOrange: '#F9C784',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
