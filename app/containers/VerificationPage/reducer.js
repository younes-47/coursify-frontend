/*
 *
 * VerificationPage reducer
 *
 */
import produce from 'immer';
import {
  SEND_VERIFICATION_EMAIL_SUCCESS,
  CLEANUP_STORE,
  DEFAULT_ACTION,
  SEND_VERIFICATION_EMAIL,
  SEND_VERIFICATION_EMAIL_ERROR,
  SET_EMAIL,
  VERIFY_EMAIL,
  VERIFY_EMAIL_ERROR,
  VERIFY_EMAIL_SUCCESS,
} from './constants';

export const initialState = {
  email: '',
  sendingVerification: false,
  errorSendingVerification: null,
  successSendingVerification: null,
  verifying: false,
  errorVerifying: null,
  successVerifying: null,
};

/* eslint-disable default-case, no-param-reassign */
const verificationPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_EMAIL:
        draft.email = action.email;
        break;
      case SEND_VERIFICATION_EMAIL:
        draft.sendingVerification = true;
        draft.errorSendingVerification = null;
        draft.successSendingVerification = null;
        break;
      case SEND_VERIFICATION_EMAIL_ERROR:
        draft.sendingVerification = false;
        draft.errorSendingVerification = action.error;
        break;
      case SEND_VERIFICATION_EMAIL_SUCCESS:
        draft.sendingVerification = false;
        draft.successSendingVerification = action.data;
        break;
      case VERIFY_EMAIL:
        draft.verifying = true;
        draft.errorVerifying = null;
        draft.successVerifying = null;
        break;
      case VERIFY_EMAIL_ERROR:
        draft.verifying = false;
        draft.errorVerifying = action.error;
        break;
      case VERIFY_EMAIL_SUCCESS:
        draft.verifying = false;
        draft.successVerifying = action.data;
        break;
      case CLEANUP_STORE:
        draft.email = '';
        draft.sendingVerification = false;
        draft.errorSendingVerification = null;
        draft.successSendingVerification = null;
        draft.verifying = false;
        draft.errorVerifying = null;
        draft.successVerifying = null;
        break;
    }
  });

export default verificationPageReducer;
