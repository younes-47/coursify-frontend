import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { GET_AVAILABLE_COURSES, WebService } from './constants';
import {
  getAvailableCoursesError,
  getAvailableCoursesSuccess,
} from './actions';

export function* getAvailableCourses() {
  try {
    const response = yield call(
      axiosPrivate.get,
      WebService.GET_AVAILABLE_COURSES_ENDPOINT,
    );
    yield put(getAvailableCoursesSuccess(response.data));
  } catch (error) {
    yield put(getAvailableCoursesError(error));
  }
}

// Individual exports for testing
export default function* userEnrollPageSaga() {
  yield takeLatest(GET_AVAILABLE_COURSES, getAvailableCourses);
}
