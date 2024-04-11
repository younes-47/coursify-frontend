import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the passwordResetPage state domain
 */

const selectPasswordResetPageDomain = (state) =>
  state.passwordResetPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectEmail = () =>
  createSelector(selectPasswordResetPageDomain, (substate) => substate.email);

const makeSelectNewPassword = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.newPassword,
  );

const makeSelectSendingPasswordResetEmail = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.sendingPasswordResetEmail,
  );

const makeSelectErrorSendingPasswordResetEmail = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.errorSendingPasswordResetEmail,
  );

const makeSelectSuccessSendingPasswordResetEmail = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.successSendingPasswordResetEmail,
  );

const makeSelectVerifyingResetPasswordToken = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.verifyingResetPasswordToken,
  );

const makeSelectErrorVerifyingResetPasswordToken = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.errorVerifyingResetPasswordToken,
  );

const makeSelectSuccessVerifyingResetPasswordToken = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.successVerifyingResetPasswordToken,
  );

const makeSelectResettingPassword = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.resettingPassword,
  );

const makeSelectErrorResettingPassword = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.errorResettingPassword,
  );

const makeSelectSuccessResettingPassword = () =>
  createSelector(
    selectPasswordResetPageDomain,
    (substate) => substate.successResettingPassword,
  );

/**
 * Default selector used by PasswordResetPage
 */

const makeSelectPasswordResetPage = () =>
  createSelector(selectPasswordResetPageDomain, (substate) => substate);

export default makeSelectPasswordResetPage;
export {
  selectPasswordResetPageDomain,
  makeSelectEmail,
  makeSelectNewPassword,
  makeSelectSendingPasswordResetEmail,
  makeSelectErrorSendingPasswordResetEmail,
  makeSelectSuccessSendingPasswordResetEmail,
  makeSelectVerifyingResetPasswordToken,
  makeSelectErrorVerifyingResetPasswordToken,
  makeSelectSuccessVerifyingResetPasswordToken,
  makeSelectResettingPassword,
  makeSelectErrorResettingPassword,
  makeSelectSuccessResettingPassword,
};
