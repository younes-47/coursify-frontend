/*
 *
 * UserProfilePage actions
 *
 */

import {
  CHANGE_AVATAR,
  CHANGE_BIRTHDATE,
  CHANGE_CURRENT_PASSWORD,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_NEW_PASSWORD,
  CLEANUP_STORE,
  DEFAULT_ACTION,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_USER_INFO,
  UPDATE_USER_INFO_ERROR,
  UPDATE_USER_INFO_SUCCESS,
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

export function changeAvatarAction(data) {
  return {
    type: CHANGE_AVATAR,
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

export function updateUserInfoAction(form) {
  return {
    type: UPDATE_USER_INFO,
    form,
  };
}

export function updateUserInfoSuccessAction(data) {
  return {
    type: UPDATE_USER_INFO_SUCCESS,
    data,
  };
}

export function updateUserInfoErrorAction(error) {
  return {
    type: UPDATE_USER_INFO_ERROR,
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
