import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signupPage state domain
 */

const selectSignupPageDomain = (state) => state.signupPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectFirstName = () =>
  createSelector(selectSignupPageDomain, (substate) => substate.firstName);

const makeSelectLastName = () =>
  createSelector(selectSignupPageDomain, (substate) => substate.lastName);

const makeSelectBirthdate = () =>
  createSelector(selectSignupPageDomain, (substate) => substate.birthdate);

const makeSelectEmail = () =>
  createSelector(selectSignupPageDomain, (substate) => substate.email);

const makeSelectPassword = () =>
  createSelector(selectSignupPageDomain, (substate) => substate.password);

const makeSelectSigningUp = () =>
  createSelector(selectSignupPageDomain, (substate) => substate.signingUp);

const makeSelectErrorSigningUp = () =>
  createSelector(selectSignupPageDomain, (substate) => substate.errorSigningUp);

const makeSelectSuccessSigningUp = () =>
  createSelector(
    selectSignupPageDomain,
    (substate) => substate.successSigningUp,
  );

/**
 * Default selector used by SignupPage
 */

const makeSelectSignupPage = () =>
  createSelector(selectSignupPageDomain, (substate) => substate);

export default makeSelectSignupPage;
export {
  selectSignupPageDomain,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectBirthdate,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectSigningUp,
  makeSelectErrorSigningUp,
  makeSelectSuccessSigningUp,
};
