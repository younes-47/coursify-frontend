import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import {
  GET_COURSE_EVALUATION,
  SUBMIT_EVALUATION,
  WebService,
} from './constants';
import {
  getCourseEvaluationError,
  getCourseEvaluationSuccess,
  submitEvaluationError,
  submitEvaluationSuccess,
} from './actions';

export function* getCourseEvaluation({ courseId }) {
  try {
    const response = yield call(
      axiosPrivate.get,
      `${WebService.GET_COURSE_EVALUATION_ENDPOINT}?courseId=${courseId}`,
    );
    yield put(getCourseEvaluationSuccess(response.data));
  } catch (error) {
    yield put(getCourseEvaluationError(error));
  }
}

export function* submitEvaluation({ from }) {
  try {
    const response = yield call(
      axiosPrivate.post,
      WebService.SUBMIT_EVALUATION_ENDPOINT,
      from,
    );
    yield put(submitEvaluationSuccess(response.data));
  } catch (error) {
    yield put(submitEvaluationError(error));
  }
}

// Individual exports for testing
export default function* userEvaluationPageSaga() {
  yield takeLatest(GET_COURSE_EVALUATION, getCourseEvaluation);
  yield takeLatest(SUBMIT_EVALUATION, submitEvaluation);
}
