import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { UPDATE_PASSWORD, UPDATE_USER_INFO, WebService } from './constants';
import {
  updatePasswordErrorAction,
  updatePasswordSuccessAction,
  updateUserInfoErrorAction,
  updateUserInfoSuccessAction,
} from './actions';

export function* UpdateProfile({ form }) {
  try {
    const { data } = yield call(
      axiosPrivate.put,
      WebService.UPDATE_USER_INFO_ENDPOINT,
      form,
    );
    yield put(updateUserInfoSuccessAction(data));
  } catch (error) {
    yield put(updateUserInfoErrorAction(error));
  }
}

export function* ChangePassword({ form }) {
  try {
    const { data } = yield call(
      axiosPrivate.put,
      WebService.UPDATE_PASSWORD_ENDPOINT,
      form,
    );
    yield put(updatePasswordSuccessAction(data));
  } catch (error) {
    yield put(updatePasswordErrorAction(error));
  }
}

// Individual exports for testing
export default function* userProfilePageSaga() {
  yield takeLatest(UPDATE_USER_INFO, UpdateProfile);
  yield takeLatest(UPDATE_PASSWORD, ChangePassword);
}
