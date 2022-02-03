import * as actions from '../action.constants';

const initialState = {
  userData: {},
};

const storeUser = (state, action) => {
  return {
    ...state,
    userData: action.payload,
  };
};

const handlers = {
  [actions.STORE_USER]: storeUser,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === 'undefined') return state;
  return handler(state, action);
};
