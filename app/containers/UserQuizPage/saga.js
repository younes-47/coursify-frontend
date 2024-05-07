import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { GET_COURSE_QUIZ, SUBMIT_QUIZ, WebService } from './constants';
import {
  getCourseQuizError,
  getCourseQuizSuccess,
  submitQuizError,
  submitQuizSuccess,
} from './actions';

export function* getCourseQuiz({ courseId }) {
  try {
    const response = yield call(
      axiosPrivate.get,
      `${WebService.GET_COURSE_QUIZ_ENDPOINT}?courseId=${courseId}`,
    );
    yield put(getCourseQuizSuccess(response.data));
  } catch (error) {
    yield put(getCourseQuizError(error));
  }
}

export function* submitQuiz({ from }) {
  try {
    const response = yield call(
      axiosPrivate.post,
      WebService.SUBMIT_QUIZ_ENDPOINT,
      from,
    );
    yield put(submitQuizSuccess(response.data));
  } catch (error) {
    yield put(submitQuizError(error));
  }
}

// Individual exports for testing
export default function* userQuizPageSaga() {
  yield takeLatest(GET_COURSE_QUIZ, getCourseQuiz);
  yield takeLatest(SUBMIT_QUIZ, submitQuiz);
}
