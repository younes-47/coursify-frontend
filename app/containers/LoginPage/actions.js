/*
 *
 * LoginPage actions
 *
 */

import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_EMAIL,
  SET_PASSWORD,
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

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}

export function loginAction(form) {
  return {
    type: LOGIN,
    form,
  };
}

export function setLoggingInError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function setLoggingInSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
}
