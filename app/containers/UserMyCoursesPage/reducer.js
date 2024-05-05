/*
 *
 * UserMyCoursesPage reducer
 *
 */
import produce from 'immer';
import {
  GET_ENROLLED_COURSES_SUCCESS,
  GET_ENROLLED_COURSES,
  GET_ENROLLED_COURSES_ERROR,
  CLEANUP_STORE,
} from './constants';

export const initialState = {
  gettingEnrolledCourses: false,
  enrolledCourses: null,
  errorGettingEnrolledCourses: null,
};

/* eslint-disable default-case, no-param-reassign */
const userMyCoursesPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ENROLLED_COURSES:
        draft.gettingEnrolledCourses = true;
        draft.enrolledCourses = null;
        draft.errorGettingEnrolledCourses = null;
        break;
      case GET_ENROLLED_COURSES_SUCCESS:
        draft.gettingEnrolledCourses = false;
        draft.enrolledCourses = action.data;
        break;
      case GET_ENROLLED_COURSES_ERROR:
        draft.gettingEnrolledCourses = false;
        draft.errorGettingEnrolledCourses = action.error;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default userMyCoursesPageReducer;
