/*
 *
 * AdminCourses reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  DELETE_COURSE,
  DELETE_COURSE_ERROR,
  DELETE_COURSE_SUCCESS,
  GET_COURSES,
  GET_COURSES_ERROR,
  GET_COURSES_SUCCESS,
} from './constants';

export const initialState = {
  gettingCourses: false,
  courses: null,
  gettingCoursesError: null,
  deletingCourse: false,
  deletingCourseError: null,
  deletingCourseSuccess: null,
};

/* eslint-disable default-case, no-param-reassign */
const adminCoursesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_COURSES:
        draft.gettingCourses = true;
        draft.gettingCoursesError = null;
        break;
      case GET_COURSES_SUCCESS:
        draft.gettingCourses = false;
        draft.courses = action.data;
        draft.gettingCoursesError = null;
        break;
      case GET_COURSES_ERROR:
        draft.gettingCourses = false;
        draft.gettingCoursesError = action.error;
        break;
      case DELETE_COURSE:
        draft.deletingCourse = true;
        draft.deletingCourseError = null;
        draft.deletingCourseSuccess = null;
        break;
      case DELETE_COURSE_SUCCESS:
        draft.deletingCourse = false;
        draft.deletingCourseSuccess = action.data;
        draft.deletingCourseError = null;
        break;
      case DELETE_COURSE_ERROR:
        draft.deletingCourse = false;
        draft.deletingCourseError = action.error;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default adminCoursesReducer;
