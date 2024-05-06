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

const makeSelectCourseContent = () =>
  createSelector(
    selectUserCourseContentDomain,
    (substate) => substate.courseContent,
  );

const makeSelectGettingCourseContent = () =>
  createSelector(
    selectUserCourseContentDomain,
    (substate) => substate.gettingCourseContent,
  );

const makeSelectGettingCourseContentError = () =>
  createSelector(
    selectUserCourseContentDomain,
    (substate) => substate.gettingCourseContentError,
  );

/**
 * Default selector used by UserCourseContent
 */

const makeSelectUserCourseContent = () =>
  createSelector(selectUserCourseContentDomain, (substate) => substate);

export default makeSelectUserCourseContent;
export {
  selectUserCourseContentDomain,
  makeSelectCourseContent,
  makeSelectGettingCourseContent,
  makeSelectGettingCourseContentError,
};
