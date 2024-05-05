import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { DELETE_COURSE, GET_COURSES, WebService } from './constants';
import {
  deleteCourseError,
  deleteCourseSuccess,
  getCoursesError,
  getCoursesSuccess,
} from './actions';

export function* getCourses() {
  try {
    const response = yield call(
      axiosPrivate.get,
      WebService.GET_COURSES_ENDPOINT,
    );
    yield put(getCoursesSuccess(response.data));
  } catch (error) {
    yield put(getCoursesError(error));
  }
}

export function* deleteCourse({ courseId }) {
  try {
    const response = yield call(
      axiosPrivate.delete,
      `${WebService.DELETE_COURSE_ENDPOINT}?courseId=${courseId}`,
      courseId,
    );
    yield put(deleteCourseSuccess(response.data));
  } catch (error) {
    yield put(deleteCourseError(error));
  }
}

// Individual exports for testing
export default function* adminCoursesSaga() {
  yield takeLatest(GET_COURSES, getCourses);
  yield takeLatest(DELETE_COURSE, deleteCourse);
}
