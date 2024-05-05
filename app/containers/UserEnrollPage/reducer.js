/*
 *
 * UserEnrollPage reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  GET_AVAILABLE_COURSES,
  GET_AVAILABLE_COURSES_ERROR,
  GET_AVAILABLE_COURSES_SUCCESS,
} from './constants';

export const initialState = {
  availableCourses: null,
  gettingAvailableCourses: false,
  getAvailableCoursesError: null,
};

/* eslint-disable default-case, no-param-reassign */
const userEnrollPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_AVAILABLE_COURSES:
        draft.gettingAvailableCourses = true;
        draft.getAvailableCoursesError = null;
        break;
      case GET_AVAILABLE_COURSES_SUCCESS:
        draft.gettingAvailableCourses = false;
        draft.availableCourses = action.data;
        draft.getAvailableCoursesError = null;
        break;
      case GET_AVAILABLE_COURSES_ERROR:
        draft.gettingAvailableCourses = false;
        draft.getAvailableCoursesError = action.error;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default userEnrollPageReducer;
