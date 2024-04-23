/*
 *
 * AdminSettings reducer
 *
 */
import produce from 'immer';
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
  UPDATE_ADMIN_INFO,
  UPDATE_ADMIN_INFO_ERROR,
  UPDATE_ADMIN_INFO_SUCCESS,
} from './constants';

export const initialState = {
  firstName: '',
  lastName: '',
  birthdate: '',
  currentPassword: '',
  newPassword: '',
  updatingAdminInfo: false,
  errorUpdatingAdminInfo: null,
  successUpdatingAdminInfo: null,
  updatingPassword: false,
  errorUpdatingPassword: null,
  successUpdatingPassword: null,
};

/* eslint-disable default-case, no-param-reassign */
const adminSettingsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case CHANGE_FIRST_NAME:
        draft.firstName = action.data;
        break;
      case CHANGE_LAST_NAME:
        draft.lastName = action.data;
        break;
      case CHANGE_BIRTHDATE:
        draft.birthdate = action.data;
        break;
      case CHANGE_AVATAR:
        draft.avatar = action.data;
        break;
      case CHANGE_NEW_PASSWORD:
        draft.newPassword = action.data;
        break;
      case CHANGE_CURRENT_PASSWORD:
        draft.currentPassword = action.data;
        break;
      case UPDATE_ADMIN_INFO:
        draft.updatingAdminInfo = true;
        draft.errorUpdatingAdminInfo = null;
        draft.successUpdatingAdminInfo = null;
        break;
      case UPDATE_ADMIN_INFO_SUCCESS:
        draft.updatingAdminInfo = false;
        draft.successUpdatingAdminInfo = action.data;
        draft.errorUpdatingAdminInfo = null;
        break;
      case UPDATE_ADMIN_INFO_ERROR:
        draft.updatingAdminInfo = false;
        draft.errorUpdatingAdminInfo = action.error;
        draft.successUpdatingAdminInfo = null;
        break;
      case UPDATE_PASSWORD:
        draft.updatingPassword = true;
        draft.errorUpdatingPassword = null;
        draft.successUpdatingPassword = null;
        break;
      case UPDATE_PASSWORD_SUCCESS:
        draft.updatingPassword = false;
        draft.successUpdatingPassword = action.data;
        draft.errorUpdatingPassword = null;
        break;
      case UPDATE_PASSWORD_ERROR:
        draft.updatingPassword = false;
        draft.errorUpdatingPassword = action.error;
        draft.successUpdatingPassword = null;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default adminSettingsReducer;
