import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import request from '../../utils/request';
import { SEND_VERIFICATION_EMAIL, VERIFY_EMAIL, WebService } from './constants';
import {
  setSendVerificationEmailError,
  setSendVerificationEmailSuccess,
  setVerifyEmailError,
  setVerifyEmailSuccess,
} from './actions';

export function* SendVerificationEmail({ email }) {
  try {
    const { data } = yield call(
      request.post,
      WebService.SEND_VERIFICATION_EMAIL_ENDPOINT,
      email,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    yield put(setSendVerificationEmailSuccess(data));
  } catch (error) {
    yield put(setSendVerificationEmailError(error));
  }
}

export function* VerifyEmail({ form }) {
  try {
    const { data } = yield call(
      request.post,
      WebService.VERIFY_EMAIL_ENDPOINT,
      form,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    yield put(setVerifyEmailSuccess(data));
  } catch (error) {
    yield put(setVerifyEmailError(error));
  }
}

// Individual exports for testing
export default function* verificationPageSaga() {
  yield takeLatest(SEND_VERIFICATION_EMAIL, SendVerificationEmail);
  yield takeLatest(VERIFY_EMAIL, VerifyEmail);
}
