/*
 *
 * UserSectionLayout actions
 *
 */

import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  GET_USER_INFO,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getUserInfoAction() {
  return {
    type: GET_USER_INFO,
  };
}

export function setUserInfoSuccess(data) {
  return {
    type: GET_USER_INFO_SUCCESS,
    data,
  };
}

export function setUserInfoError(error) {
  return {
    type: GET_USER_INFO_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
