import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { axiosPublic } from '../../utils/custom/api/axios';
import {
  RESET_PASSWORD,
  SEND_RESET_PASSWORD_EMAIL,
  VERIFY_RESET_PASSWORD_TOKEN,
  WebService,
} from './constants';
import {
  setResetPasswordErrorAction,
  setResetPasswordSuccessAction,
  setSendResetPasswordEmailErrorAction,
  setSendResetPasswordEmailSuccessAction,
  setVerifyResetPasswordTokenErrorAction,
  setVerifyResetPasswordTokenSuccessAction,
} from './actions';

export function* SendPasswordResetEmail({ email }) {
  try {
    const { data } = yield call(
      axiosPublic.post,
      WebService.SEND_RESET_PASSWORD_EMAIL_ENDPOINT,
      email,
    );
    yield put(setSendResetPasswordEmailSuccessAction(data));
  } catch (error) {
    yield put(setSendResetPasswordEmailErrorAction(error));
  }
}

export function* VerifyPasswordResetToken({ form }) {
  try {
    const { data } = yield call(
      axiosPublic.post,
      WebService.VERIFY_RESET_PASSWORD_TOKEN_ENDPOINT,
      form,
    );
    yield put(setVerifyResetPasswordTokenSuccessAction(data));
  } catch (error) {
    yield put(setVerifyResetPasswordTokenErrorAction(error));
  }
}

export function* ResetPassword({ form }) {
  try {
    const { data } = yield call(
      axiosPublic.post,
      WebService.RESET_PASSWORD_ENDPOINT,
      form,
    );
    yield put(setResetPasswordSuccessAction(data));
  } catch (error) {
    yield put(setResetPasswordErrorAction(error));
  }
}

// Individual exports for testing
export default function* passwordResetPageSaga() {
  yield takeLatest(SEND_RESET_PASSWORD_EMAIL, SendPasswordResetEmail);
  yield takeLatest(VERIFY_RESET_PASSWORD_TOKEN, VerifyPasswordResetToken);
  yield takeLatest(RESET_PASSWORD, ResetPassword);
}
