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

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, (substate) => substate);

export default makeSelectLoginPage;
export { selectLoginPageDomain, makeSelectEmail, makeSelectPassword };
