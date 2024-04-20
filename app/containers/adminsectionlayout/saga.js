import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axiosPrivate from '../../utils/custom/api/axios';
import { GET_ADMIN_INFO, WebService } from './constants';
import { setAdminInfoError, setAdminInfoSuccess } from './actions';

export function* GetAdminInfo() {
  try {
    const { data } = yield call(
      axiosPrivate.get,
      WebService.GET_ADMIN_INFO_ENDPOINT,
    );
    yield put(setAdminInfoSuccess(data));
  } catch (error) {
    yield put(setAdminInfoError(error));
  }
}

// Individual exports for testing
export default function* adminSectionLayoutSaga() {
  yield takeLatest(GET_ADMIN_INFO, GetAdminInfo);
}
