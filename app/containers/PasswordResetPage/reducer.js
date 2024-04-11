/*
 *
 * PasswordResetPage reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  SEND_RESET_PASSWORD_EMAIL,
  SEND_RESET_PASSWORD_EMAIL_ERROR,
  SEND_RESET_PASSWORD_EMAIL_SUCCESS,
  SET_EMAIL,
  SET_NEW_PASSWORD,
  VERIFY_RESET_PASSWORD_TOKEN,
  VERIFY_RESET_PASSWORD_TOKEN_ERROR,
  VERIFY_RESET_PASSWORD_TOKEN_SUCCESS,
} from './constants';

export const initialState = {
  email: '',
  newPassword: '',
  sendingPasswordResetEmail: false,
  errorSendingPasswordResetEmail: null,
  successSendingPasswordResetEmail: null,
  verifyingResetPasswordToken: false,
  errorVerifyingResetPasswordToken: null,
  successVerifyingResetPasswordToken: null,
  resettingPassword: false,
  errorResettingPassword: null,
  successResettingPassword: null,
};

/* eslint-disable default-case, no-param-reassign */
const passwordResetPageReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_EMAIL:
        draft.email = action.email;
        break;
      case SET_NEW_PASSWORD:
        draft.newPassword = action.password;
        break;
      case SEND_RESET_PASSWORD_EMAIL:
        draft.sendingPasswordResetEmail = true;
        break;
      case SEND_RESET_PASSWORD_EMAIL_SUCCESS:
        draft.sendingPasswordResetEmail = false;
        draft.successSendingPasswordResetEmail = true;
        draft.errorSendingPasswordResetEmail = null;
        break;
      case SEND_RESET_PASSWORD_EMAIL_ERROR:
        draft.sendingPasswordResetEmail = false;
        draft.errorSendingPasswordResetEmail = action.error;
        draft.successSendingPasswordResetEmail = null;
        break;
      case VERIFY_RESET_PASSWORD_TOKEN:
        draft.verifyingResetPasswordToken = true;
        draft.errorVerifyingResetPasswordToken = null;
        draft.successVerifyingResetPasswordToken = null;
        break;
      case VERIFY_RESET_PASSWORD_TOKEN_SUCCESS:
        draft.verifyingResetPasswordToken = false;
        draft.successVerifyingResetPasswordToken = true;
        draft.errorVerifyingResetPasswordToken = null;
        break;
      case VERIFY_RESET_PASSWORD_TOKEN_ERROR:
        draft.verifyingResetPasswordToken = false;
        draft.errorVerifyingResetPasswordToken = action.error;
        draft.successVerifyingResetPasswordToken = null;
        break;
      case RESET_PASSWORD:
        draft.resettingPassword = true;
        draft.errorResettingPassword = null;
        draft.successResettingPassword = null;
        break;
      case RESET_PASSWORD_SUCCESS:
        draft.resettingPassword = false;
        draft.successResettingPassword = true;
        draft.errorResettingPassword = null;
        break;
      case RESET_PASSWORD_ERROR:
        draft.resettingPassword = false;
        draft.errorResettingPassword = action.error;
        draft.successResettingPassword = null;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default passwordResetPageReducer;
