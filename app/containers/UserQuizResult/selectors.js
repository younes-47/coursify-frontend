import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userQuizResult state domain
 */

const selectUserQuizResultDomain = (state) =>
  state.userQuizResult || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserQuizResult
 */

const makeSelectUserQuizResult = () =>
  createSelector(selectUserQuizResultDomain, (substate) => substate);

export default makeSelectUserQuizResult;
export { selectUserQuizResultDomain };
