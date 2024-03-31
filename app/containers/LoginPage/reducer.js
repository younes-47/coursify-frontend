/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  DEFAULT_ACTION,
  SET_EMAIL,
  SET_PASSWORD,
} from './constants';

export const initialState = {
  email: '',
  password: '',
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
      case CLEANUP_STORE:
        draft.email = '';
        draft.password = '';
        break;
    }
  });

export default loginPageReducer;
