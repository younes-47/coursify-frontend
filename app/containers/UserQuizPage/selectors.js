import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userQuizPage state domain
 */

const selectUserQuizPageDomain = (state) => state.userQuizPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectGettingCourseQuiz = () =>
  createSelector(
    selectUserQuizPageDomain,
    (substate) => substate.gettingCourseQuiz,
  );

const makeSelectGetCourseQuizError = () =>
  createSelector(
    selectUserQuizPageDomain,
    (substate) => substate.getCourseQuizError,
  );

const makeSelectCourseQuiz = () =>
  createSelector(selectUserQuizPageDomain, (substate) => substate.courseQuiz);

const makeSelectQuizForm = () =>
  createSelector(selectUserQuizPageDomain, (substate) => substate.quizForm);

const makeSelectSubmittingQuiz = () =>
  createSelector(
    selectUserQuizPageDomain,
    (substate) => substate.submittingQuiz,
  );

const makeSelectSubmitQuizError = () =>
  createSelector(
    selectUserQuizPageDomain,
    (substate) => substate.submitQuizError,
  );

const makeSelectQuizResult = () =>
  createSelector(selectUserQuizPageDomain, (substate) => substate.quizResult);

/**
 * Default selector used by UserQuizPage
 */

const makeSelectUserQuizPage = () =>
  createSelector(selectUserQuizPageDomain, (substate) => substate);

export default makeSelectUserQuizPage;
export {
  selectUserQuizPageDomain,
  makeSelectGettingCourseQuiz,
  makeSelectGetCourseQuizError,
  makeSelectCourseQuiz,
  makeSelectQuizForm,
  makeSelectSubmittingQuiz,
  makeSelectSubmitQuizError,
  makeSelectQuizResult,
};
