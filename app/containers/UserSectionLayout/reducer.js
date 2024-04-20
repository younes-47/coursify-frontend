/*
 *
 * UserSectionLayout reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  GET_USER_INFO,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
} from './constants';

export const initialState = {
  userInfo: null,
  gettingUserInfo: false,
  getUserInfoSuccess: false,
  getUserInfoError: false,
};

/* eslint-disable default-case, no-param-reassign */
const userSectionLayoutReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_USER_INFO:
        draft.gettingUserInfo = true;
        draft.getUserInfoSuccess = false;
        draft.getUserInfoError = false;
        break;
      case GET_USER_INFO_SUCCESS:
        draft.userInfo = action.data;
        draft.gettingUserInfo = false;
        draft.getUserInfoSuccess = true;
        draft.getUserInfoError = false;
        break;
      case GET_USER_INFO_ERROR:
        draft.getUserInfoError = action.error;
        draft.gettingUserInfo = false;
        draft.getUserInfoSuccess = false;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default userSectionLayoutReducer;
