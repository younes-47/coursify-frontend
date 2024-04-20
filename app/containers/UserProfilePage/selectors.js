import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userProfilePage state domain
 */

const selectUserProfilePageDomain = (state) =>
  state.userProfilePage || initialState;

/**
 * Other specific selectors
 */

const makeSelectFirstName = () =>
  createSelector(selectUserProfilePageDomain, (substate) => substate.firstName);

const makeSelectLastName = () =>
  createSelector(selectUserProfilePageDomain, (substate) => substate.lastName);

const makeSelectBirthdate = () =>
  createSelector(selectUserProfilePageDomain, (substate) => substate.birthdate);

const makeSelectAvatar = () =>
  createSelector(selectUserProfilePageDomain, (substate) => substate.avatar);

const makeSelectNewPassword = () =>
  createSelector(
    selectUserProfilePageDomain,
    (substate) => substate.newPassword,
  );

const makeSelectCurrentPassword = () =>
  createSelector(
    selectUserProfilePageDomain,
    (substate) => substate.currentPassword,
  );

const makeSelectUpdatingUserInfo = () =>
  createSelector(
    selectUserProfilePageDomain,
    (substate) => substate.updatingUserInfo,
  );

const makeSelectErrorUpdatingUserInfo = () =>
  createSelector(
    selectUserProfilePageDomain,
    (substate) => substate.errorUpdatingUserInfo,
  );

const makeSelectSuccessUpdatingUserInfo = () =>
  createSelector(
    selectUserProfilePageDomain,
    (substate) => substate.successUpdatingUserInfo,
  );

const makeSelectUpdatingPassword = () =>
  createSelector(
    selectUserProfilePageDomain,
    (substate) => substate.updatingPassword,
  );

const makeSelectErrorUpdatingPassword = () =>
  createSelector(
    selectUserProfilePageDomain,
    (substate) => substate.errorUpdatingPassword,
  );

const makeSelectSuccessUpdatingPassword = () =>
  createSelector(
    selectUserProfilePageDomain,
    (substate) => substate.successUpdatingPassword,
  );

/**
 * Default selector used by UserProfilePage
 */

const makeSelectUserProfilePage = () =>
  createSelector(selectUserProfilePageDomain, (substate) => substate);

export default makeSelectUserProfilePage;
export {
  selectUserProfilePageDomain,
  makeSelectNewPassword,
  makeSelectCurrentPassword,
  makeSelectUpdatingUserInfo,
  makeSelectErrorUpdatingUserInfo,
  makeSelectSuccessUpdatingUserInfo,
  makeSelectUpdatingPassword,
  makeSelectErrorUpdatingPassword,
  makeSelectSuccessUpdatingPassword,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectBirthdate,
  makeSelectAvatar,
};
