import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
const BASE_URL = 'baseUrl';

const getAccessToken = async () => {
  try {
    const value = await AsyncStorage.getItem(ACCESS_TOKEN);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

const getRefreshToken = async () => {
  try {
    const value = await AsyncStorage.getItem(REFRESH_TOKEN);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

const setToken = async (value) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN, value);
    return true;
  } catch (e) {
    return false;
  }
};

const setRefreshToken = async (value) => {
  try {
    await AsyncStorage.setItem(REFRESH_TOKEN, value);
    return true;
  } catch (e) {
    return false;
  }
};

const getBaseUrl = async () => {
  try {
    const value = await AsyncStorage.getItem(BASE_URL);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

const setBaseUrl = async (value) => {
  try {
    await AsyncStorage.setItem(BASE_URL, value);

    return true;
  } catch (e) {
    return false;
  }
};

const clearToken = async () => {
  try {
    await AsyncStorage.removeItem(ACCESS_TOKEN);
    return true;
  } catch (exception) {
    return false;
  }
};

const clearRefreshToken = async () => {
  try {
    await AsyncStorage.removeItem(REFRESH_TOKEN);
    return true;
  } catch (exception) {
    return false;
  }
};

export {
  setToken,
  getAccessToken,
  setRefreshToken,
  getRefreshToken,
  clearToken,
  clearRefreshToken,
  getBaseUrl,
  setBaseUrl,
};
