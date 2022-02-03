import Call from '../services/axios';
import { trackPromise } from 'react-promise-tracker';
import { getUrl } from '../../constants/urls';
import Axios from 'axios';

export const userAsync = () => {
  const url = getUrl('user');
  return trackPromise(Axios.get(url));
};

export const loginAsync = ({ email, password }) => {
  // return trackPromise(axios.post(getUrl("login"), payload));
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'Developer5@gmail.com' && password == '123456') {
        resolve({ name: 'Developer' }); // success
      } else {
        reject({ email, password }); // fail
      }
    }, 1000);
  });
  return trackPromise(myPromise);
};
