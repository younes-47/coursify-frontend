import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import {
  GET_COURSE_CONTENT,
  MARK_AS_COMPLETED,
  MARK_AS_INCOMPLETE,
  WebService,
} from './constants';
import {
  getCourseContentError,
  getCourseContentSuccess,
  markCompleteErrorAction,
  markCompleteSuccessAction,
  markIncompleteErrorAction,
  markIncompleteSuccessAction,
} from './actions';

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

export function* markCompleted({ sectionId }) {
  try {
    yield call(
      axiosPrivate.put,
      `${WebService.MARK_AS_COMPLETED_ENDPOINT}?sectionId=${sectionId}`,
    );
    yield put(markCompleteSuccessAction());
  } catch (error) {
    yield put(markCompleteErrorAction(error));
  }
}

export function* markIncomplete({ sectionId }) {
  try {
    yield call(
      axiosPrivate.put,
      `${WebService.MARK_AS_INCOMPLETE_ENDPOINT}?sectionId=${sectionId}`,
    );
    yield put(markIncompleteSuccessAction());
  } catch (error) {
    yield put(markIncompleteErrorAction(error));
  }
}

// Individual exports for testing
export default function* userCourseContentSaga() {
  yield takeLatest(GET_COURSE_CONTENT, getCourseContent);
  yield takeLatest(MARK_AS_COMPLETED, markCompleted);
  yield takeLatest(MARK_AS_INCOMPLETE, markIncomplete);
}
