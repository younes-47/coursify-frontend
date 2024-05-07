/*
 *
 * UserQuizPage actions
 *
 */

import {
  GET_COURSE_QUIZ,
  GET_COURSE_QUIZ_SUCCESS,
  GET_COURSE_QUIZ_ERROR,
  CLEANUP_STORE,
  SUBMIT_QUIZ,
  SUBMIT_QUIZ_SUCCESS,
  SUBMIT_QUIZ_ERROR,
  SET_QUIZ_FORM,
  UPDATE_QUIZ_ANSWERS,
} from './constants';

export function getCourseQuiz(courseId) {
  return {
    type: GET_COURSE_QUIZ,
    courseId,
  };
}

export function getCourseQuizSuccess(data) {
  return {
    type: GET_COURSE_QUIZ_SUCCESS,
    data,
  };
}

export function getCourseQuizError(error) {
  return {
    type: GET_COURSE_QUIZ_ERROR,
    error,
  };
}

export function submitQuiz(from) {
  return {
    type: SUBMIT_QUIZ,
    from,
  };
}

export function submitQuizSuccess(response) {
  return {
    type: SUBMIT_QUIZ_SUCCESS,
    response,
  };
}

export function submitQuizError(error) {
  return {
    type: SUBMIT_QUIZ_ERROR,
    error,
  };
}

export function setQuizForm(data) {
  return {
    type: SET_QUIZ_FORM,
    data,
  };
}

export function updateQuizAnswers(questionId, answerId) {
  return {
    type: UPDATE_QUIZ_ANSWERS,
    questionId,
    answerId,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
