/*
 *
 * UserQuizPage reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  GET_COURSE_QUIZ,
  GET_COURSE_QUIZ_ERROR,
  GET_COURSE_QUIZ_SUCCESS,
  SET_QUIZ_FORM,
  SUBMIT_QUIZ,
  SUBMIT_QUIZ_ERROR,
  SUBMIT_QUIZ_SUCCESS,
  UPDATE_QUIZ_ANSWERS,
} from './constants';

export const initialState = {
  gettingCourseQuiz: false,
  getCourseQuizError: null,
  courseQuiz: null,

  quizForm: null,

  submittingQuiz: false,
  submitQuizError: null,
  quizResult: null,
};

/* eslint-disable default-case, no-param-reassign */
const userQuizPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_COURSE_QUIZ:
        draft.gettingCourseQuiz = true;
        draft.getCourseQuizError = null;
        draft.courseQuiz = null;
        break;
      case GET_COURSE_QUIZ_SUCCESS:
        draft.gettingCourseQuiz = false;
        draft.courseQuiz = action.data;
        break;
      case GET_COURSE_QUIZ_ERROR:
        draft.gettingCourseQuiz = false;
        draft.getCourseQuizError = action.error;
        break;

      case SET_QUIZ_FORM:
        draft.quizForm = action.data;
        break;
      case UPDATE_QUIZ_ANSWERS: {
        const { questionId, answerId } = action;
        const newAnswers = draft.quizForm.answers.map((answer) => {
          if (answer.questionId === questionId) {
            return { ...answer, answerId };
          }
          return answer;
        });
        draft.quizForm.answers = newAnswers;
        break;
      }
      case SUBMIT_QUIZ:
        draft.submittingQuiz = true;
        draft.submitQuizError = null;
        break;
      case SUBMIT_QUIZ_SUCCESS:
        draft.submittingQuiz = false;
        draft.quizResult = action.response;
        break;
      case SUBMIT_QUIZ_ERROR:
        draft.submittingQuiz = false;
        draft.submitQuizError = action.error;
        draft.quizResult = null;
        break;

      case CLEANUP_STORE:
        return initialState;
    }
  });

export default userQuizPageReducer;
