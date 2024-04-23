import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { UPDATE_ADMIN_INFO, UPDATE_PASSWORD, WebService } from './constants';
import {
  updateAdminInfoErrorAction,
  updateAdminInfoSuccessAction,
  updatePasswordErrorAction,
  updatePasswordSuccessAction,
} from './actions';

export function* UpdateProfile({ form }) {
  try {
    const { data } = yield call(
      axiosPrivate.put,
      WebService.UPDATE_ADMIN_INFO_ENDPOINT,
      form,
    );
    yield put(updateAdminInfoSuccessAction(data));
  } catch (error) {
    yield put(updateAdminInfoErrorAction(error));
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
export default function* adminSettingsSaga() {
  yield takeLatest(UPDATE_ADMIN_INFO, UpdateProfile);
  yield takeLatest(UPDATE_PASSWORD, ChangePassword);
}
