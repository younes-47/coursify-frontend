/*
 *
 * AdminSectionLayout actions
 *
 */

import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  GET_ADMIN_INFO,
  GET_ADMIN_INFO_ERROR,
  GET_ADMIN_INFO_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getAdminInfoAction() {
  return {
    type: GET_ADMIN_INFO,
  };
}

export function setAdminInfoSuccess(data) {
  return {
    type: GET_ADMIN_INFO_SUCCESS,
    data,
  };
}

export function setAdminInfoError(error) {
  return {
    type: GET_ADMIN_INFO_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
