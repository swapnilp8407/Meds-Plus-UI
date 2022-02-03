import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppReducers from './reducers/root.reducers';
import allSagas from './sagas/root.saga';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middleWares = [];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, AppReducers);
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  middleWares.push(sagaMiddleware);

  const allMiddleWares = compose(applyMiddleware(...middleWares));
  const store = createStore(persistedReducer, allMiddleWares);
  let persistor = persistStore(store);

  sagaMiddleware.run(allSagas);

  return { store, persistor };
};

export default configureStore;
