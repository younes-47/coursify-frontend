import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { GET_COURSE_DETAILS, WebService } from './constants';
import { getCourseDetailsError, getCourseDetailsSuccess } from './actions';

export function* getCourseDetails({ courseId }) {
  try {
    const response = yield call(
      axiosPrivate.get,
      `${WebService.GET_COURSE_DETAILS_ENDPOINT}?courseId=${courseId}`,
    );
    yield put(getCourseDetailsSuccess(response.data));
  } catch (error) {
    yield put(getCourseDetailsError(error));
  }
}

// Individual exports for testing
export default function* userCourseDetailsPageSaga() {
  yield takeLatest(GET_COURSE_DETAILS, getCourseDetails);
}
