/*
 *
 * SignupPage reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  SET_BIRTHDATE,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PASSWORD,
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from './constants';

export const initialState = {
  firstName: '',
  lastName: '',
  birthdate: '',
  email: '',
  password: '',
  signingUp: false,
  errorSigningUp: null,
  successSigningUp: null,
};

/* eslint-disable default-case, no-param-reassign */
const signupPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_FIRST_NAME:
        draft.firstName = action.firstName;
        break;
      case SET_LAST_NAME:
        draft.lastName = action.lastName;
        break;
      case SET_BIRTHDATE:
        draft.birthdate = action.birthdate;
        break;
      case SET_EMAIL:
        draft.email = action.email;
        break;
      case SET_PASSWORD:
        draft.password = action.password;
        break;
      case SIGNUP:
        draft.signingUp = true;
        break;
      case SIGNUP_ERROR:
        draft.signingUp = false;
        draft.errorSigningUp = action.error;
        break;
      case SIGNUP_SUCCESS:
        draft.signingUp = false;
        draft.successSigningUp = action.response;
        break;
      case CLEANUP_STORE:
        draft.firstName = '';
        draft.lastName = '';
        draft.birthdate = '';
        draft.email = '';
        draft.password = '';
        draft.signingUp = false;
        draft.errorSigningUp = null;
        draft.successSigningUp = null;
        break;
    }
  });

export default signupPageReducer;
