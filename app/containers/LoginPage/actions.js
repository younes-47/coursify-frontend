/*
 *
 * LoginPage actions
 *
 */

import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
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
