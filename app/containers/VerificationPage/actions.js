/*
 *
 * VerificationPage actions
 *
 */

import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  SEND_VERIFICATION_EMAIL,
  SEND_VERIFICATION_EMAIL_ERROR,
  SEND_VERIFICATION_EMAIL_SUCCESS,
  SET_EMAIL,
  VERIFY_EMAIL,
  VERIFY_EMAIL_ERROR,
  VERIFY_EMAIL_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sendVerificationEmailAction(email) {
  return {
    type: SEND_VERIFICATION_EMAIL,
    email,
  };
}

export function setSendVerificationEmailError(error) {
  return {
    type: SEND_VERIFICATION_EMAIL_ERROR,
    error,
  };
}

export function setSendVerificationEmailSuccess(data) {
  return {
    type: SEND_VERIFICATION_EMAIL_SUCCESS,
    data,
  };
}

export function verifyEmailAction(form) {
  return {
    type: VERIFY_EMAIL,
    form,
  };
}

export function setVerifyEmailSuccess(data) {
  return {
    type: VERIFY_EMAIL_SUCCESS,
    data,
  };
}

export function setVerifyEmailError(error) {
  return {
    type: VERIFY_EMAIL_ERROR,
    error,
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
