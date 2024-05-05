import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { GET_ENROLLED_COURSES, WebService } from './constants';
import { getEnrolledCoursesError, getEnrolledCoursesSuccess } from './actions';

export function* getEnrolledCourses() {
  try {
    const response = yield call(
      axiosPrivate.get,
      WebService.GET_ENROLLED_COURSES_ENDPOINT,
    );
    yield put(getEnrolledCoursesSuccess(response?.data));
  } catch (err) {
    yield put(getEnrolledCoursesError(err));
  }
}

// Individual exports for testing
export default function* userMyCoursesPageSaga() {
  yield takeLatest(GET_ENROLLED_COURSES, getEnrolledCourses);
}
