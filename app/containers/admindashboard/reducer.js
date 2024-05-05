/*
 *
 * AdminDashboard reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  GET_INSIGHTS,
  GET_INSIGHTS_ERROR,
  GET_INSIGHTS_SUCCESS,
} from './constants';

export const initialState = {
  gettingInsights: false,
  gettingInsightsError: null,
  insights: null,
};

/* eslint-disable default-case, no-param-reassign */
const adminDashboardReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_INSIGHTS:
        draft.gettingInsights = true;
        draft.gettingInsightsError = null;
        break;
      case GET_INSIGHTS_SUCCESS:
        draft.gettingInsights = false;
        draft.gettingInsightsError = false;
        draft.insights = action.data;
        break;
      case GET_INSIGHTS_ERROR:
        draft.gettingInsights = false;
        draft.gettingInsightsError = action.error;
        break;
      case CLEANUP_STORE:
        draft.gettingInsights = false;
        draft.gettingInsightsError = null;
        draft.insights = null;
        break;
    }
  });

export default adminDashboardReducer;
