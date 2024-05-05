import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminCourses state domain
 */

const selectAdminCoursesDomain = (state) => state.adminCourses || initialState;

/**
 * Other specific selectors
 */

const makeSelectGettingCourses = () =>
  createSelector(
    selectAdminCoursesDomain,
    (substate) => substate.gettingCourses,
  );

const makeSelectCourses = () =>
  createSelector(selectAdminCoursesDomain, (substate) => substate.courses);

const makeSelectGettingCoursesError = () =>
  createSelector(
    selectAdminCoursesDomain,
    (substate) => substate.gettingCoursesError,
  );

const makeSelectDeletingCourse = () =>
  createSelector(
    selectAdminCoursesDomain,
    (substate) => substate.deletingCourse,
  );

const makeSelectDeletingCourseError = () =>
  createSelector(
    selectAdminCoursesDomain,
    (substate) => substate.deletingCourseError,
  );

const makeSelectDeletingCourseSuccess = () =>
  createSelector(
    selectAdminCoursesDomain,
    (substate) => substate.deletingCourseSuccess,
  );

/**
 * Default selector used by AdminCourses
 */

const makeSelectAdminCourses = () =>
  createSelector(selectAdminCoursesDomain, (substate) => substate);

export default makeSelectAdminCourses;
export {
  selectAdminCoursesDomain,
  makeSelectGettingCourses,
  makeSelectCourses,
  makeSelectGettingCoursesError,
  makeSelectDeletingCourse,
  makeSelectDeletingCourseError,
  makeSelectDeletingCourseSuccess,
};
