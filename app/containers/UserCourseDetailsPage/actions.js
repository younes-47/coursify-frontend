/*
 *
 * UserCourseDetailsPage actions
 *
 */

import {
  CLEANUP_STORE,
  GET_COURSE_DETAILS,
  GET_COURSE_DETAILS_ERROR,
  GET_COURSE_DETAILS_SUCCESS,
} from './constants';

export function getCourseDetails(courseId) {
  return {
    type: GET_COURSE_DETAILS,
    courseId,
  };
}

export function getCourseDetailsSuccess(data) {
  return {
    type: GET_COURSE_DETAILS_SUCCESS,
    data,
  };
}

export function getCourseDetailsError(error) {
  return {
    type: GET_COURSE_DETAILS_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
