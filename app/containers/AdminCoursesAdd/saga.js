import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import axiosPrivate from '../../utils/custom/api/axios';
import { ADD_COURSE, GET_COURSE_CATEGORIES, WebService } from './constants';
import {
  addCourseError,
  addCourseSuccess,
  getCourseCategoriesError,
  getCourseCategoriesSuccess,
} from './actions';

export function* AddCourse({ form }) {
  try {
    const response = yield call(
      axiosPrivate.post,
      WebService.ADD_COURSE_ENDPOINT,
      form,
    );

    yield put(addCourseSuccess());
  } catch (error) {
    yield put(addCourseError(error));
  }
}

export function* GetCourseCategories() {
  try {
    const response = yield call(
      axiosPrivate.get,
      WebService.GET_COURSE_CATEGORIES_ENDPOINT,
    );

    yield put(getCourseCategoriesSuccess(response.data));
  } catch (error) {
    yield put(getCourseCategoriesError(error));
  }
}

// Individual exports for testing
export default function* adminCoursesAddSaga() {
  yield takeLatest(ADD_COURSE, AddCourse);
  yield takeLatest(GET_COURSE_CATEGORIES, GetCourseCategories);
}
