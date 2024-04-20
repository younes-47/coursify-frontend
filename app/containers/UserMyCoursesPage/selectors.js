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

/**
 * Default selector used by UserMyCoursesPage
 */

const makeSelectUserMyCoursesPage = () =>
  createSelector(selectUserMyCoursesPageDomain, (substate) => substate);

export default makeSelectUserMyCoursesPage;
export { selectUserMyCoursesPageDomain };
