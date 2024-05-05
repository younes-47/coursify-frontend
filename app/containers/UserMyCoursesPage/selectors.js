import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userMyCoursesPage state domain
 */

const selectUserMyCoursesPageDomain = (state) =>
  state.userMyCoursesPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectGettingEnrolledCourses = () =>
  createSelector(
    selectUserMyCoursesPageDomain,
    (substate) => substate.gettingEnrolledCourses,
  );

const makeSelectEnrolledCourses = () =>
  createSelector(
    selectUserMyCoursesPageDomain,
    (substate) => substate.enrolledCourses,
  );

const makeSelectErrorGettingEnrolledCourses = () =>
  createSelector(
    selectUserMyCoursesPageDomain,
    (substate) => substate.errorGettingEnrolledCourses,
  );

/**
 * Default selector used by UserMyCoursesPage
 */

const makeSelectUserMyCoursesPage = () =>
  createSelector(selectUserMyCoursesPageDomain, (substate) => substate);

export default makeSelectUserMyCoursesPage;
export {
  selectUserMyCoursesPageDomain,
  makeSelectGettingEnrolledCourses,
  makeSelectEnrolledCourses,
  makeSelectErrorGettingEnrolledCourses,
};
