import { combineReducers } from 'redux';
import AUTH from './auth.reducers';

const reducers = combineReducers({
  auth: AUTH,
});

export default reducers;
