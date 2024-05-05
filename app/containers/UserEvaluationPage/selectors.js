import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userEvaluationPage state domain
 */

const selectUserEvaluationPageDomain = (state) =>
  state.userEvaluationPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectCourseEvaluation = () =>
  createSelector(
    selectUserEvaluationPageDomain,
    (substate) => substate.courseEvaluation,
  );

const makeSelectGettingCourseEvaluation = () =>
  createSelector(
    selectUserEvaluationPageDomain,
    (substate) => substate.gettingCourseEvaluation,
  );

const makeSelectGetCourseEvaluationError = () =>
  createSelector(
    selectUserEvaluationPageDomain,
    (substate) => substate.getCourseEvaluationError,
  );

const makeSelectEvaluationForm = () =>
  createSelector(
    selectUserEvaluationPageDomain,
    (substate) => substate.evaluationForm,
  );

const makeSelectSubmittingEvaluation = () =>
  createSelector(
    selectUserEvaluationPageDomain,
    (substate) => substate.submittingEvaluation,
  );

const makeSelectSubmitEvaluationError = () =>
  createSelector(
    selectUserEvaluationPageDomain,
    (substate) => substate.submitEvaluationError,
  );

const makeSelectEvaluationResult = () =>
  createSelector(
    selectUserEvaluationPageDomain,
    (substate) => substate.evaluationResult,
  );

/**
 * Default selector used by UserEvaluationPage
 */

const makeSelectUserEvaluationPage = () =>
  createSelector(selectUserEvaluationPageDomain, (substate) => substate);

export default makeSelectUserEvaluationPage;
export {
  selectUserEvaluationPageDomain,
  makeSelectCourseEvaluation,
  makeSelectGettingCourseEvaluation,
  makeSelectGetCourseEvaluationError,
  makeSelectEvaluationForm,
  makeSelectSubmittingEvaluation,
  makeSelectSubmitEvaluationError,
  makeSelectEvaluationResult,
};
