/*
 *
 * UserCourseContent actions
 *
 */

import {
  GET_COURSE_CONTENT,
  GET_COURSE_CONTENT_SUCCESS,
  GET_COURSE_CONTENT_ERROR,
  CLEANUP_STORE,
} from './constants';

export function getCourseContent(courseId) {
  return {
    type: GET_COURSE_CONTENT,
    courseId,
  };
}

export function getCourseContentSuccess(data) {
  return {
    type: GET_COURSE_CONTENT_SUCCESS,
    data,
  };
}

export function getCourseContentError(error) {
  return {
    type: GET_COURSE_CONTENT_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
