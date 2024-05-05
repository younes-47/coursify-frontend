import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { GET_INSIGHTS, WebService } from './constants';
import { getInsightsError, getInsightsSuccess } from './actions';

export function* getInsights() {
  try {
    const response = yield call(
      axiosPrivate.get,
      WebService.GET_INSIGHTS_ENDPOINT,
    );
    yield put(getInsightsSuccess(response.data));
  } catch (error) {
    yield put(getInsightsError(error));
  }
}

// Individual exports for testing
export default function* adminDashboardSaga() {
  yield takeLatest(GET_INSIGHTS, getInsights);
}
