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
  MARK_AS_COMPLETED,
  MARK_AS_COMPLETED_SUCCESS,
  MARK_AS_COMPLETED_ERROR,
  MARK_AS_INCOMPLETE,
  MARK_AS_INCOMPLETE_SUCCESS,
  MARK_AS_INCOMPLETE_ERROR,
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

export function markCompleteAction(sectionId) {
  return {
    type: MARK_AS_COMPLETED,
    sectionId,
  };
}

export function markCompleteSuccessAction() {
  return {
    type: MARK_AS_COMPLETED_SUCCESS,
  };
}

export function markCompleteErrorAction(error) {
  return {
    type: MARK_AS_COMPLETED_ERROR,
    error,
  };
}

export function markIncompleteAction(sectionId) {
  return {
    type: MARK_AS_INCOMPLETE,
    sectionId,
  };
}

export function markIncompleteSuccessAction() {
  return {
    type: MARK_AS_INCOMPLETE_SUCCESS,
  };
}

export function markIncompleteErrorAction(error) {
  return {
    type: MARK_AS_INCOMPLETE_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
