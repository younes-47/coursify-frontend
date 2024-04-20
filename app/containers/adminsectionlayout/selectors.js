import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminSectionLayout state domain
 */

const selectAdminSectionLayoutDomain = (state) =>
  state.adminSectionLayout || initialState;

/**
 * Other specific selectors
 */

const makeSelectAdminInfo = () =>
  createSelector(
    selectAdminSectionLayoutDomain,
    (substate) => substate.adminInfo,
  );

const makeSelectGettingAdminInfo = () =>
  createSelector(
    selectAdminSectionLayoutDomain,
    (substate) => substate.gettingAdminInfo,
  );

const makeSelectGetAdminInfoSuccess = () =>
  createSelector(
    selectAdminSectionLayoutDomain,
    (substate) => substate.getAdminInfoSuccess,
  );

const makeSelectGetAdminInfoError = () =>
  createSelector(
    selectAdminSectionLayoutDomain,
    (substate) => substate.getAdminInfoError,
  );

/**
 * Default selector used by AdminSectionLayout
 */

const makeSelectAdminSectionLayout = () =>
  createSelector(selectAdminSectionLayoutDomain, (substate) => substate);

export default makeSelectAdminSectionLayout;
export {
  selectAdminSectionLayoutDomain,
  makeSelectAdminInfo,
  makeSelectGettingAdminInfo,
  makeSelectGetAdminInfoSuccess,
  makeSelectGetAdminInfoError,
};
