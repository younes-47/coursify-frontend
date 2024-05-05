import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userCourseContent state domain
 */

const selectUserCourseContentDomain = (state) =>
  state.userCourseContent || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserCourseContent
 */

const makeSelectUserCourseContent = () =>
  createSelector(selectUserCourseContentDomain, (substate) => substate);

export default makeSelectUserCourseContent;
export { selectUserCourseContentDomain };
