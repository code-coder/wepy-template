import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga/dist/redux-saga';
import root from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(root);
  return store;
}
