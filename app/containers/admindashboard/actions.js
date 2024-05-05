/*
 *
 * AdminDashboard actions
 *
 */

import {
  CLEANUP_STORE,
  GET_INSIGHTS,
  GET_INSIGHTS_ERROR,
  GET_INSIGHTS_SUCCESS,
} from './constants';

export function getInsights() {
  return {
    type: GET_INSIGHTS,
  };
}

export function getInsightsSuccess(data) {
  return {
    type: GET_INSIGHTS_SUCCESS,
    data,
  };
}

export function getInsightsError(error) {
  return {
    type: GET_INSIGHTS_ERROR,
    error,
  };
}

export function cleanupStore() {
  return {
    type: CLEANUP_STORE,
  };
}
