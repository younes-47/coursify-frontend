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

/**
 * Default selector used by AdminCoursesAdd
 */

const makeSelectAdminCoursesAdd = () =>
  createSelector(selectAdminCoursesAddDomain, (substate) => substate);

export default makeSelectAdminCoursesAdd;
export { selectAdminCoursesAddDomain };
