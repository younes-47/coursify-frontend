import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminDashboard state domain
 */

const selectAdminDashboardDomain = (state) =>
  state.adminDashboard || initialState;

/**
 * Other specific selectors
 */

const makeSelectGettingInsights = () =>
  createSelector(
    selectAdminDashboardDomain,
    (substate) => substate.gettingInsights,
  );

const makeSelectGettingInsightsError = () =>
  createSelector(
    selectAdminDashboardDomain,
    (substate) => substate.gettingInsightsError,
  );

const makeSelectInsights = () =>
  createSelector(selectAdminDashboardDomain, (substate) => substate.insights);

/**
 * Default selector used by AdminDashboard
 */

const makeSelectAdminDashboard = () =>
  createSelector(selectAdminDashboardDomain, (substate) => substate);

export default makeSelectAdminDashboard;
export {
  selectAdminDashboardDomain,
  makeSelectGettingInsights,
  makeSelectGettingInsightsError,
  makeSelectInsights,
};
