import { call, takeLatest, put } from 'redux-saga/effects';
import { userAsync, loginAsync } from '../asyncActions/auth.async';
import { storeUser, storeProfile } from '../actions/auth.actions';
import * as actions from '../action.constants';

function* UserRequest(action) {
  try {
    const response = yield call(userAsync);
    if (response) {
      yield put(storeUser(response?.data));
    }
  } catch (e) {
    console.log('REquest User Error', e);
  }
}

function* loginRequest(action) {
  try {
    const response = yield call(loginAsync, action.payload);
    if (response) {
      console.log('REsponse', response);
      // yield put(storeProfile(response));
      // yield action.successCallback(response.data);
    }
  } catch (e) {
    action.errorCallback(e);
  }
}

export function* authSaga() {
  yield takeLatest(actions.REQUEST_USER, UserRequest);
  yield takeLatest(actions.REQUEST_LOGIN, loginRequest);
}
