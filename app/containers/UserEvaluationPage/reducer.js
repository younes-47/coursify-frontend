/*
 *
 * UserEvaluationPage reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  GET_COURSE_EVALUATION,
  GET_COURSE_EVALUATION_ERROR,
  GET_COURSE_EVALUATION_SUCCESS,
  SET_EVALUATION_FORM,
  SUBMIT_EVALUATION,
  SUBMIT_EVALUATION_ERROR,
  SUBMIT_EVALUATION_SUCCESS,
  UPDATE_EVALUATION_ANSWERS,
} from './constants';

export const initialState = {
  courseEvaluation: null,
  gettingCourseEvaluation: false,
  getCourseEvaluationError: null,

  evaluationForm: null,

  submittingEvaluation: false,
  submitEvaluationError: null,
  evaluationResult: null,
};

/* eslint-disable default-case, no-param-reassign */
const userEvaluationPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_COURSE_EVALUATION:
        draft.gettingCourseEvaluation = true;
        draft.getCourseEvaluationError = null;
        break;
      case GET_COURSE_EVALUATION_SUCCESS:
        draft.courseEvaluation = action.evaluation;
        draft.gettingCourseEvaluation = false;
        break;
      case GET_COURSE_EVALUATION_ERROR:
        draft.gettingCourseEvaluation = false;
        draft.getCourseEvaluationError = action.error;
        break;
      case SET_EVALUATION_FORM:
        draft.evaluationForm = action.data;
        break;
      case UPDATE_EVALUATION_ANSWERS: {
        const { questionId, answerId } = action;
        const newAnswers = draft.evaluationForm.answers.map((answer) => {
          if (answer.questionId === questionId) {
            return { ...answer, answerId };
          }
          return answer;
        });
        draft.evaluationForm.answers = newAnswers;
        break;
      }
      case SUBMIT_EVALUATION:
        draft.submittingEvaluation = true;
        draft.submitEvaluationError = null;
        break;
      case SUBMIT_EVALUATION_SUCCESS:
        draft.submittingEvaluation = false;
        draft.evaluationResult = action.response;
        break;
      case SUBMIT_EVALUATION_ERROR:
        draft.submittingEvaluation = false;
        draft.submitEvaluationError = action.error;
        draft.evaluationResult = null;
        break;

      case CLEANUP_STORE:
        return initialState;
    }
  });

export default userEvaluationPageReducer;
