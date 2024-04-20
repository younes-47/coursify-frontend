import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userSectionLayout state domain
 */

const selectUserSectionLayoutDomain = (state) =>
  state.userSectionLayout || initialState;

/**
 * Other specific selectors
 */

const makeSelectUserInfo = () =>
  createSelector(
    selectUserSectionLayoutDomain,
    (substate) => substate.userInfo,
  );

const makeSelectGetUserInfoSuccess = () =>
  createSelector(
    selectUserSectionLayoutDomain,
    (substate) => substate.getUserInfoSuccess,
  );

const makeSelectGetUserInfoError = () =>
  createSelector(
    selectUserSectionLayoutDomain,
    (substate) => substate.getUserInfoError,
  );

/**
 * Default selector used by UserSectionLayout
 */

const makeSelectUserSectionLayout = () =>
  createSelector(selectUserSectionLayoutDomain, (substate) => substate);

export default makeSelectUserSectionLayout;
export {
  selectUserSectionLayoutDomain,
  makeSelectUserInfo,
  makeSelectGetUserInfoSuccess,
  makeSelectGetUserInfoError,
};
