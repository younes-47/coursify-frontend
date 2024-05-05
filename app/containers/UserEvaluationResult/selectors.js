import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userEvaluationResult state domain
 */

const selectUserEvaluationResultDomain = (state) =>
  state.userEvaluationResult || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserEvaluationResult
 */

const makeSelectUserEvaluationResult = () =>
  createSelector(selectUserEvaluationResultDomain, (substate) => substate);

export default makeSelectUserEvaluationResult;
export { selectUserEvaluationResultDomain };
