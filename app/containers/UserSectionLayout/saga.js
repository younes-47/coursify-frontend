import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_USER_INFO, WebService } from './constants';
import { setUserInfoError, setUserInfoSuccess } from './actions';
import axiosPrivate from '../../utils/custom/api/axios';

export function* GetUserInfo() {
  try {
    const { data } = yield call(
      axiosPrivate.get,
      WebService.GET_USER_INFO_ENDPOINT,
    );
    yield put(setUserInfoSuccess(data));
  } catch (error) {
    yield put(setUserInfoError(error));
  }
}

// Individual exports for testing
export default function* userSectionLayoutSaga() {
  yield takeLatest(GET_USER_INFO, GetUserInfo);
}
