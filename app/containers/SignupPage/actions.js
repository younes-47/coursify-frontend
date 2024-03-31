/*
 *
 * SignupPage actions
 *
 */

import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  SET_BIRTHDATE,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PASSWORD,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setFirstName(firstName) {
  return {
    type: SET_FIRST_NAME,
    firstName,
  };
}

export function setLastName(lastName) {
  return {
    type: SET_LAST_NAME,
    lastName,
  };
}

export function setBirthdate(birthdate) {
  return {
    type: SET_BIRTHDATE,
    birthdate,
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
