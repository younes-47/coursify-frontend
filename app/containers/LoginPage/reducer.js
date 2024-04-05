/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_EMAIL,
  SET_PASSWORD,
} from './constants';

export const initialState = {
  email: '',
  password: '',
  loggingIn: false,
  errorLoggingIn: null,
  successLoggingIn: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_EMAIL:
        draft.email = action.email;
        break;
      case SET_PASSWORD:
        draft.password = action.password;
        break;
      case LOGIN:
        draft.loggingIn = true;
        break;
      case LOGIN_ERROR:
        draft.loggingIn = false;
        draft.errorLoggingIn = action.error;
        break;
      case LOGIN_SUCCESS:
        draft.loggingIn = false;
        draft.successLoggingIn = action.response;
        break;
      case CLEANUP_STORE:
        draft.email = '';
        draft.password = '';
        draft.loggingIn = false;
        draft.errorLoggingIn = null;
        draft.successLoggingIn = null;
        break;
    }
  });

export default loginPageReducer;
