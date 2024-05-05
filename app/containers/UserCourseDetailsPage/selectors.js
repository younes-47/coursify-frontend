import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userCourseDetailsPage state domain
 */

const selectUserCourseDetailsPageDomain = (state) =>
  state.userCourseDetailsPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectCourseDetails = () =>
  createSelector(
    selectUserCourseDetailsPageDomain,
    (substate) => substate.courseDetails,
  );

const makeSelectGettingCourseDetails = () =>
  createSelector(
    selectUserCourseDetailsPageDomain,
    (substate) => substate.gettingCourseDetails,
  );

const makeSelectErrorGettingCourseDetails = () =>
  createSelector(
    selectUserCourseDetailsPageDomain,
    (substate) => substate.errorGettingCourseDetails,
  );

/**
 * Default selector used by UserCourseDetailsPage
 */

const makeSelectUserCourseDetailsPage = () =>
  createSelector(selectUserCourseDetailsPageDomain, (substate) => substate);

export default makeSelectUserCourseDetailsPage;
export {
  selectUserCourseDetailsPageDomain,
  makeSelectCourseDetails,
  makeSelectGettingCourseDetails,
  makeSelectErrorGettingCourseDetails,
};
