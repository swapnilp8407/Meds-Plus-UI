const BASEURL = {
  baseURL: 'http://restapi.adequateshop.com/',
};

const USER = {
  user: 'https://jsonplaceholder.typicode.com/posts/1',
};
const AUTH = {
  login: '/api/authaccount/login',
  register: '/api/authaccount/registration',
};

const allURLs = {
  ...BASEURL,
  ...USER,
  ...AUTH,
};

export const getUrl = (key) => {
  return allURLs[key];
};
