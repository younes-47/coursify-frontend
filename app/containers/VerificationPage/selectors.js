import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the verificationPage state domain
 */

const selectVerificationPageDomain = (state) =>
  state.verificationPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectEmail = () =>
  createSelector(selectVerificationPageDomain, (substate) => substate.email);

const makeSelectVerifying = () =>
  createSelector(
    selectVerificationPageDomain,
    (substate) => substate.verifying,
  );

const makeSelectErrorVerifying = () =>
  createSelector(
    selectVerificationPageDomain,
    (substate) => substate.errorVerifying,
  );

const makeSelectSuccessVerifying = () =>
  createSelector(
    selectVerificationPageDomain,
    (substate) => substate.successVerifying,
  );

const makeSelectSendingVerification = () =>
  createSelector(
    selectVerificationPageDomain,
    (substate) => substate.sendingVerification,
  );

const makeSelectSuccessSendingVerification = () =>
  createSelector(
    selectVerificationPageDomain,
    (substate) => substate.successSendingVerification,
  );

const makeSelectErrorSendingVerification = () =>
  createSelector(
    selectVerificationPageDomain,
    (substate) => substate.errorSendingVerification,
  );

/**
 * Default selector used by VerificationPage
 */

const makeSelectVerificationPage = () =>
  createSelector(selectVerificationPageDomain, (substate) => substate);

export default makeSelectVerificationPage;
export {
  selectVerificationPageDomain,
  makeSelectEmail,
  makeSelectVerifying,
  makeSelectErrorVerifying,
  makeSelectSuccessVerifying,
  makeSelectSendingVerification,
  makeSelectSuccessSendingVerification,
  makeSelectErrorSendingVerification,
};
