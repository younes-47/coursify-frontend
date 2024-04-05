import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import request from '../../utils/request';
import { LOGIN, WebService } from './constants';
import { setLoggingInError, setLoggingInSuccess } from './actions';

export function* login({ form }) {
  try {
    const { data } = yield call(request.post, WebService.LOGIN_REQUEST, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(setLoggingInSuccess(data));
  } catch (error) {
    yield put(setLoggingInError(error));
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN, login);
}
