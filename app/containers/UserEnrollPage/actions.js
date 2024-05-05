/*
 *
 * UserEnrollPage actions
 *
 */

import {
  CLEANUP_STORE,
  GET_AVAILABLE_COURSES,
  GET_AVAILABLE_COURSES_ERROR,
  GET_AVAILABLE_COURSES_SUCCESS,
} from './constants';

export function getAvailableCourses() {
  return {
    type: GET_AVAILABLE_COURSES,
  };
}

export function getAvailableCoursesSuccess(data) {
  return {
    type: GET_AVAILABLE_COURSES_SUCCESS,
    data,
  };
}

export function getAvailableCoursesError(error) {
  return {
    type: GET_AVAILABLE_COURSES_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
