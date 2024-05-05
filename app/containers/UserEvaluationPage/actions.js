/*
 *
 * UserEvaluationPage actions
 *
 */

import {
  GET_COURSE_EVALUATION,
  GET_COURSE_EVALUATION_SUCCESS,
  GET_COURSE_EVALUATION_ERROR,
  CLEANUP_STORE,
  UPDATE_EVALUATION_ANSWERS,
  SUBMIT_EVALUATION,
  SUBMIT_EVALUATION_SUCCESS,
  SUBMIT_EVALUATION_ERROR,
  SET_EVALUATION_FORM,
} from './constants';

export function getCourseEvaluation(courseId) {
  return {
    type: GET_COURSE_EVALUATION,
    courseId,
  };
}

export function getCourseEvaluationSuccess(evaluation) {
  return {
    type: GET_COURSE_EVALUATION_SUCCESS,
    evaluation,
  };
}

export function getCourseEvaluationError(error) {
  return {
    type: GET_COURSE_EVALUATION_ERROR,
    error,
  };
}

export function submitEvaluation(from) {
  return {
    type: SUBMIT_EVALUATION,
    from,
  };
}

export function submitEvaluationSuccess(response) {
  return {
    type: SUBMIT_EVALUATION_SUCCESS,
    response,
  };
}

export function submitEvaluationError(error) {
  return {
    type: SUBMIT_EVALUATION_ERROR,
    error,
  };
}

export function setEvaluationForm(data) {
  return {
    type: SET_EVALUATION_FORM,
    data,
  };
}

export function updateEvaluationAnswers(questionId, answerId) {
  return {
    type: UPDATE_EVALUATION_ANSWERS,
    questionId,
    answerId,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
