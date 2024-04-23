import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminCourses state domain
 */

const selectAdminCoursesDomain = (state) => state.adminCourses || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdminCourses
 */

const makeSelectAdminCourses = () =>
  createSelector(selectAdminCoursesDomain, (substate) => substate);

export default makeSelectAdminCourses;
export { selectAdminCoursesDomain };
