import {
  fetchProfileSuccess,
  fetchProfileError,
  fetchProfile,
  startLoginError,
  startLoginSuccess,
  resetProfile,
  registerSuccess,
  registerError,
} from './auth.actions';
import { getProfile, login, register } from './../../api';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AuthActionTypes, LoginAction, RegisterAction } from './auth.types';

export function* fetchProfileAsync() {
  try {
    const res = yield call(getProfile);
    yield put(fetchProfileSuccess(res.data));
  } catch (e) {
    localStorage.removeItem('authToken');
    yield put(fetchProfileError(e.message));
  }
}

export function* fetchProfileSaga() {
  yield takeLatest(AuthActionTypes.FETCH_PROFILE, fetchProfileAsync);
}

export function* loginAsync(action: LoginAction) {
  try {
    const res = yield call(login, action.payload);
    if (res.data.token) {
      localStorage.setItem('authToken', res.data.token);
      yield put(startLoginSuccess());
      yield put(fetchProfile());
      return;
    }
    yield put(startLoginError('Unknown error'));
  } catch (e) {
    yield put(startLoginError(e.response?.data?.message));
  }
}

export function* loginSaga() {
  yield takeLatest(AuthActionTypes.LOGIN, loginAsync);
}

export function* logoutAsync() {
  localStorage.removeItem('authToken');
  yield put(resetProfile());
}

export function* logoutSaga() {
  yield takeLatest(AuthActionTypes.LOGOUT, logoutAsync);
}

export function* registerAsync(action: RegisterAction) {
  try {
    const res = yield call(register, action.payload);
    if (res.data.token) {
      localStorage.setItem('authToken', res.data.token);
      yield put(registerSuccess());
      yield put(fetchProfile());
      return;
    }
    yield put(registerError('Unknown error'));
  } catch (e) {
    yield put(registerError(e.response?.data?.message));
  }
}

export function* registerSaga() {
  yield takeLatest(AuthActionTypes.REGISTER, registerAsync);
}

export function* authSagas() {
  yield all([call(loginSaga), call(logoutSaga), call(registerSaga), call(fetchProfileSaga)]);
}
