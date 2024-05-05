/*
 *
 * AdminCourses actions
 *
 */

import {
  CLEANUP_STORE,
  DELETE_COURSE,
  DELETE_COURSE_ERROR,
  DELETE_COURSE_SUCCESS,
  GET_COURSES,
  GET_COURSES_ERROR,
  GET_COURSES_SUCCESS,
} from './constants';

export function getCourses() {
  return {
    type: GET_COURSES,
  };
}

export function getCoursesSuccess(data) {
  return {
    type: GET_COURSES_SUCCESS,
    data,
  };
}

export function getCoursesError(error) {
  return {
    type: GET_COURSES_ERROR,
    error,
  };
}

export function deleteCourse(courseId) {
  return {
    type: DELETE_COURSE,
    courseId,
  };
}

export function deleteCourseSuccess(data) {
  return {
    type: DELETE_COURSE_SUCCESS,
    data,
  };
}

export function deleteCourseError(error) {
  return {
    type: DELETE_COURSE_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
