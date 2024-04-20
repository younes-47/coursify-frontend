/*
 *
 * AdminSectionLayout reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  GET_ADMIN_INFO,
  GET_ADMIN_INFO_ERROR,
  GET_ADMIN_INFO_SUCCESS,
} from './constants';

export const initialState = {
  adminInfo: null,
  gettingAdminInfo: false,
  getAdminInfoSuccess: null,
  getAdminInfoError: null,
};

/* eslint-disable default-case, no-param-reassign */
const adminSectionLayoutReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_ADMIN_INFO:
        draft.gettingAdminInfo = true;
        draft.getAdminInfoSuccess = null;
        draft.getAdminInfoError = null;
        break;
      case GET_ADMIN_INFO_SUCCESS:
        draft.adminInfo = action.data;
        draft.gettingAdminInfo = false;
        draft.getAdminInfoSuccess = true;
        draft.getAdminInfoError = null;
        break;
      case GET_ADMIN_INFO_ERROR:
        draft.getAdminInfoError = action.error;
        draft.gettingAdminInfo = false;
        draft.getAdminInfoSuccess = null;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default adminSectionLayoutReducer;
