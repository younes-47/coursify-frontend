import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminCoursesAdd state domain
 */

const selectAdminCoursesAddDomain = (state) =>
  state.adminCoursesAdd || initialState;

/**
 * Other specific selectors
 */

const makeSelectCourseInfo = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.courseInfo,
  );

const makeSelectSections = () =>
  createSelector(selectAdminCoursesAddDomain, (substate) => substate.sections);

const makeSelectEvaluationQuestions = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.evaluationQuestions,
  );

const makeSelectQuizQuestions = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.quizQuestions,
  );

const makeSelectAddingCourse = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.addingCourse,
  );

const makeSelectAddCourseError = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.addCourseError,
  );

const makeSelectAddCourseSuccess = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.addCourseSuccess,
  );

const makeSelectGettingCourseCategories = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.gettingCourseCategories,
  );

const makeSelectCourseCategories = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.courseCategories,
  );

const makeSelectGetCourseCategoriesError = () =>
  createSelector(
    selectAdminCoursesAddDomain,
    (substate) => substate.getCourseCategoriesError,
  );

/**
 * Default selector used by AdminCoursesAdd
 */

const makeSelectAdminCoursesAdd = () =>
  createSelector(selectAdminCoursesAddDomain, (substate) => substate);

export default makeSelectAdminCoursesAdd;
export {
  selectAdminCoursesAddDomain,
  makeSelectCourseInfo,
  makeSelectSections,
  makeSelectEvaluationQuestions,
  makeSelectQuizQuestions,
  makeSelectAddingCourse,
  makeSelectAddCourseError,
  makeSelectAddCourseSuccess,
  makeSelectGettingCourseCategories,
  makeSelectCourseCategories,
  makeSelectGetCourseCategoriesError,
};
