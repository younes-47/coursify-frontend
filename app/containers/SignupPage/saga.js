import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { SIGNUP, WebService } from './constants';
import { setSignupError, setSignupSuccess } from './actions';

export function* signup({ form }) {
  try {
    const { data } = yield call(request.post, WebService.SIGNUP_REQUEST, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(setSignupSuccess(data));
  } catch (error) {
    yield put(setSignupError(error));
  }
}

// Individual exports for testing
export default function* signupPageSaga() {
  yield takeLatest(SIGNUP, signup);
}
