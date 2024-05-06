import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { GET_COURSE_CONTENT, WebService } from './constants';
import { getCourseContentError, getCourseContentSuccess } from './actions';

export function* getCourseContent({ courseId }) {
  try {
    const response = yield call(
      axiosPrivate.get,
      `${WebService.GET_COURSE_CONTENT_ENDPOINT}?courseId=${courseId}`,
    );
    yield put(getCourseContentSuccess(response.data));
  } catch (error) {
    yield put(getCourseContentError(error));
  }
}

// Individual exports for testing
export default function* userCourseContentSaga() {
  yield takeLatest(GET_COURSE_CONTENT, getCourseContent);
}
