import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = (state) => state.loginPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectEmail = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.email);

const makeSelectPassword = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.password);

const makeSelectLoggingIn = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.loggingIn);

const makeSelectSuccessLoggingIn = () =>
  createSelector(
    selectLoginPageDomain,
    (substate) => substate.successLoggingIn,
  );

const makeSelectErrorLoggingIn = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.errorLoggingIn);

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, (substate) => substate);

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectSuccessLoggingIn,
  makeSelectErrorLoggingIn,
  makeSelectLoggingIn,
};
