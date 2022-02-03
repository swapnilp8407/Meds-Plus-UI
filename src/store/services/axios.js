import axios from 'axios';
import Toast from 'react-native-toast-message';
import { getUrl } from '../../constants/urls';
import { isEmpty } from 'lodash';
import {
  clearToken,
  getAccessToken,
  getBaseUrl,
  getRefreshToken,
  setToken,
} from './asyncStoreServices';

const defaultHeaders = {
  'Content-type': 'application/json',
};

const requestProcess = axios.create({
  headers: defaultHeaders,
});

requestProcess.interceptors.request.use(async (req) => {
  const access = await getAccessToken();
  const baseUrl = await getBaseUrl();
  if (baseUrl) {
    req.baseURL = baseUrl;
  }
  if (access) {
    req.headers.Authorization = `Bearer ${access}`;
  }
  return req;
});

requestProcess.interceptors.response.use(
  (response) => {
    if (response.status === 204) {
      Toast.show({
        type: 'success',
        text1: 'Record deleted successfully',
      });
    } else {
      // Toaster display on user actions only. Like Add, Edit, Delete
      if (!isEmpty(response.data.message) && response.config.method !== 'get') {
        Toast.show({
          type: 'success',
          text1: response.data.message,
        });
      }
    }
    return response;
  },
  (error) => {
    if (error.response.status === 400) {
      const error_message = error.response.data.data;
      if (!isEmpty(error_message)) {
        for (const prop in error_message) {
          if (error_message[prop]) {
            Toast.show({
              type: 'error',
              text1: `${error_message[prop]}`,
            });
          }
        }
      } else {
        if (error.response.data.message) {
          Toast.show({
            type: 'error',
            text1: error.response.data.message,
          });
        }
      }
    } else if (error.response.status === 401) {
      try {
        const refreshToken = getRefreshToken();
        if (refreshToken) {
          return requestProcess
            .post(getUrl('refresh'), { refresh: refreshToken })
            .then(async ({ data }) => {
              await setToken(data);
              return requestProcess.request(error.config).then((data) => {
                return data;
              });
            })
            .catch(() => {
              RootNavigation.navigate('Login');
              clearToken();
              if (error.response.data.message) {
                Toast.show({
                  type: 'error',
                  text1: error.response.data.message,
                });
              }
            });
        } else {
          if (error.response.data.message) {
            Toast.show({
              type: 'error',
              text1: error.response.data.message,
            });
          }
          clearToken();
        }
      } catch (error) {
        if (error.response.data.message) {
          Toast.show({
            type: 'error',
            text1: error.response.data.message,
          });
        }
        clearToken();
      }
    } else {
      if (error.response.data.message || error.response.data.detail) {
        Toast.show({
          type: 'error',
          text1: error.response.data.message || error.response.data.detail,
        });
      }
    }

    return Promise.reject(error);
  }
);

export default requestProcess;
