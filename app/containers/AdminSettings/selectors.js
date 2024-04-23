import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminSettings state domain
 */

const selectAdminSettingsDomain = (state) =>
  state.adminSettings || initialState;

/**
 * Other specific selectors
 */
const makeSelectFirstName = () =>
  createSelector(selectAdminSettingsDomain, (substate) => substate.firstName);

const makeSelectLastName = () =>
  createSelector(selectAdminSettingsDomain, (substate) => substate.lastName);

const makeSelectBirthdate = () =>
  createSelector(selectAdminSettingsDomain, (substate) => substate.birthdate);

const makeSelectNewPassword = () =>
  createSelector(selectAdminSettingsDomain, (substate) => substate.newPassword);

const makeSelectCurrentPassword = () =>
  createSelector(
    selectAdminSettingsDomain,
    (substate) => substate.currentPassword,
  );

const makeSelectUpdatingAdminInfo = () =>
  createSelector(
    selectAdminSettingsDomain,
    (substate) => substate.updatingAdminInfo,
  );

const makeSelectErrorUpdatingAdminInfo = () =>
  createSelector(
    selectAdminSettingsDomain,
    (substate) => substate.errorUpdatingAdminInfo,
  );

const makeSelectSuccessUpdatingAdminInfo = () =>
  createSelector(
    selectAdminSettingsDomain,
    (substate) => substate.successUpdatingAdminInfo,
  );

const makeSelectUpdatingPassword = () =>
  createSelector(
    selectAdminSettingsDomain,
    (substate) => substate.updatingPassword,
  );

const makeSelectErrorUpdatingPassword = () =>
  createSelector(
    selectAdminSettingsDomain,
    (substate) => substate.errorUpdatingPassword,
  );

const makeSelectSuccessUpdatingPassword = () =>
  createSelector(
    selectAdminSettingsDomain,
    (substate) => substate.successUpdatingPassword,
  );
/**
 * Default selector used by AdminSettings
 */

const makeSelectAdminSettings = () =>
  createSelector(selectAdminSettingsDomain, (substate) => substate);

export default makeSelectAdminSettings;
export {
  selectAdminSettingsDomain,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectBirthdate,
  makeSelectNewPassword,
  makeSelectCurrentPassword,
  makeSelectUpdatingAdminInfo,
  makeSelectErrorUpdatingAdminInfo,
  makeSelectSuccessUpdatingAdminInfo,
  makeSelectUpdatingPassword,
  makeSelectErrorUpdatingPassword,
  makeSelectSuccessUpdatingPassword,
};
