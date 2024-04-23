/*
 *
 * AdminSettings actions
 *
 */

import {
  CHANGE_BIRTHDATE,
  CHANGE_CURRENT_PASSWORD,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_NEW_PASSWORD,
  CLEANUP_STORE,
  DEFAULT_ACTION,
  UPDATE_ADMIN_INFO,
  UPDATE_ADMIN_INFO_ERROR,
  UPDATE_ADMIN_INFO_SUCCESS,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
  UPDATE_PASSWORD_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeFirstNameAction(data) {
  return {
    type: CHANGE_FIRST_NAME,
    data,
  };
}

export function changeLastNameAction(data) {
  return {
    type: CHANGE_LAST_NAME,
    data,
  };
}

export function changeBirthdateAction(data) {
  return {
    type: CHANGE_BIRTHDATE,
    data,
  };
}

export function changeNewPasswordAction(data) {
  return {
    type: CHANGE_NEW_PASSWORD,
    data,
  };
}

export function changeCurrentPasswordAction(data) {
  return {
    type: CHANGE_CURRENT_PASSWORD,
    data,
  };
}

export function updateAdminInfoAction(form) {
  return {
    type: UPDATE_ADMIN_INFO,
    form,
  };
}

export function updateAdminInfoSuccessAction(data) {
  return {
    type: UPDATE_ADMIN_INFO_SUCCESS,
    data,
  };
}

export function updateAdminInfoErrorAction(error) {
  return {
    type: UPDATE_ADMIN_INFO_ERROR,
    error,
  };
}

export function updatePasswordAction(form) {
  return {
    type: UPDATE_PASSWORD,
    form,
  };
}

export function updatePasswordSuccessAction(data) {
  return {
    type: UPDATE_PASSWORD_SUCCESS,
    data,
  };
}

export function updatePasswordErrorAction(error) {
  return {
    type: UPDATE_PASSWORD_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
