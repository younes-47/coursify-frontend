/*
 *
 * PasswordResetPage actions
 *
 */

import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  RESET_PASSWORD,
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

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email,
  };
}

export function setNewPassword(password) {
  return {
    type: SET_NEW_PASSWORD,
    password,
  };
}

export function sendResetPasswordEmailAction(email) {
  return {
    type: SEND_RESET_PASSWORD_EMAIL,
    email,
  };
}

export function setSendResetPasswordEmailSuccessAction() {
  return {
    type: SEND_RESET_PASSWORD_EMAIL_SUCCESS,
  };
}

export function setSendResetPasswordEmailErrorAction(error) {
  return {
    type: SEND_RESET_PASSWORD_EMAIL_ERROR,
    error,
  };
}

export function resetPasswordAction(form) {
  return {
    type: RESET_PASSWORD,
    form,
  };
}

export function setResetPasswordSuccessAction() {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
}

export function setResetPasswordErrorAction(error) {
  return {
    type: RESET_PASSWORD,
    error,
  };
}

export function verifyResetPasswordTokenAction(form) {
  return {
    type: VERIFY_RESET_PASSWORD_TOKEN,
    form,
  };
}

export function setVerifyResetPasswordTokenSuccessAction(success) {
  return {
    type: VERIFY_RESET_PASSWORD_TOKEN_SUCCESS,
    success,
  };
}

export function setVerifyResetPasswordTokenErrorAction(error) {
  return {
    type: VERIFY_RESET_PASSWORD_TOKEN_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
