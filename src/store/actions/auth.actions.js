import * as actions from '../action.constants';

export const requestUser = () => ({
  type: actions.REQUEST_USER,
  // payload: data,
});

export const storeUser = (data) => ({
  type: actions.STORE_USER,
  payload: data,
});

export const requestLogin = (data, successCallback, errorCallback) => ({
  type: actions.REQUEST_LOGIN,
  payload: data,
  successCallback,
  errorCallback,
});

export const storeProfile = (data) => ({
  type: actions.STORE_PROFILE,
  payload: data,
});
