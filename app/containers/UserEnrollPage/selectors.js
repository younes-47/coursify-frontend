import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userEnrollPage state domain
 */

const selectUserEnrollPageDomain = (state) =>
  state.userEnrollPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectAvailableCourses = () =>
  createSelector(
    selectUserEnrollPageDomain,
    (substate) => substate.availableCourses,
  );

const makeSelectGettingAvailableCourses = () =>
  createSelector(
    selectUserEnrollPageDomain,
    (substate) => substate.gettingAvailableCourses,
  );

const makeSelectGetAvailableCoursesError = () =>
  createSelector(
    selectUserEnrollPageDomain,
    (substate) => substate.getAvailableCoursesError,
  );

/**
 * Default selector used by UserEnrollPage
 */

const makeSelectUserEnrollPage = () =>
  createSelector(selectUserEnrollPageDomain, (substate) => substate);

export default makeSelectUserEnrollPage;
export {
  selectUserEnrollPageDomain,
  makeSelectAvailableCourses,
  makeSelectGettingAvailableCourses,
  makeSelectGetAvailableCoursesError,
};
