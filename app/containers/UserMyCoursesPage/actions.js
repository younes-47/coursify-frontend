/*
 *
 * EnrolledMyCoursesPage actions
 *
 */

import {
  GET_ENROLLED_COURSES,
  GET_ENROLLED_COURSES_SUCCESS,
  GET_ENROLLED_COURSES_ERROR,
  CLEANUP_STORE,
} from './constants';

export function getEnrolledCourses() {
  return {
    type: GET_ENROLLED_COURSES,
  };
}

export function getEnrolledCoursesSuccess(data) {
  return {
    type: GET_ENROLLED_COURSES_SUCCESS,
    data,
  };
}

export function getEnrolledCoursesError(error) {
  return {
    type: GET_ENROLLED_COURSES_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
