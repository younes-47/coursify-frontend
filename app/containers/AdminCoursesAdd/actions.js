/*
 *
 * AdminCoursesAdd actions
 *
 */

import {
  ADD_COURSE,
  ADD_COURSE_ERROR,
  ADD_COURSE_SUCCESS,
  ADD_EVALUATION_QUESTION,
  ADD_QUIZ_QUESTION,
  ADD_SECTION,
  CLEANUP_STORE,
  DEFAULT_ACTION,
  GET_COURSE_CATEGORIES,
  GET_COURSE_CATEGORIES_ERROR,
  GET_COURSE_CATEGORIES_SUCCESS,
  REMOVE_EVALUATION_QUESTION,
  REMOVE_QUIZ_QUESTION,
  REMOVE_SECTION,
  SET_COURSE_INFO,
  UPDATE_EVALUATION_QUESTION,
  UPDATE_QUIZ_QUESTION,
  UPDATE_SECTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

// INFORMATIONS

export function updateCourseInfo(field, value) {
  return {
    type: SET_COURSE_INFO,
    field,
    value,
  };
}

// SECTIONS

export function addSection() {
  return {
    type: ADD_SECTION,
  };
}

export function removeSection(sectionId) {
  return {
    type: REMOVE_SECTION,
    sectionId,
  };
}

export function updateSection(sectionId, field, value) {
  return {
    type: UPDATE_SECTION,
    sectionId,
    field,
    value,
  };
}

// EVALUATION

export function addEvaluationQuestion() {
  return {
    type: ADD_EVALUATION_QUESTION,
  };
}

export function removeEvaluationQuestion(questionId) {
  return {
    type: REMOVE_EVALUATION_QUESTION,
    questionId,
  };
}

export function updateEvaluationQuestion(questionId, field, value) {
  return {
    type: UPDATE_EVALUATION_QUESTION,
    questionId,
    field,
    value,
  };
}

// QUIZ

export function addQuizQuestion() {
  return {
    type: ADD_QUIZ_QUESTION,
  };
}

export function removeQuizQuestion(questionId) {
  return {
    type: REMOVE_QUIZ_QUESTION,
    questionId,
  };
}

export function updateQuizQuestion(questionId, field, value) {
  return {
    type: UPDATE_QUIZ_QUESTION,
    questionId,
    field,
    value,
  };
}

// API CALLS

export function addCourse(form) {
  return {
    type: ADD_COURSE,
    form,
  };
}

export function addCourseSuccess() {
  return {
    type: ADD_COURSE_SUCCESS,
  };
}

export function addCourseError(error) {
  return {
    type: ADD_COURSE_ERROR,
    error,
  };
}

export function getCourseCategories() {
  return {
    type: GET_COURSE_CATEGORIES,
  };
}

export function getCourseCategoriesSuccess(data) {
  return {
    type: GET_COURSE_CATEGORIES_SUCCESS,
    data,
  };
}

export function getCourseCategoriesError(error) {
  return {
    type: GET_COURSE_CATEGORIES_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
