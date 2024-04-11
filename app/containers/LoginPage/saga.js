import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { axiosCredentials } from '../../utils/custom/api/axios';
import { LOGIN, WebService } from './constants';
import { setLoggingInError, setLoggingInSuccess } from './actions';

export function* login({ form }) {
  try {
    const { data } = yield call(
      axiosCredentials.post,
      WebService.LOGIN_REQUEST,
      form,
    );
    yield put(setLoggingInSuccess(data));
  } catch (error) {
    yield put(setLoggingInError(error));
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN, login);
}
