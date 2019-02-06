import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga';


import rootReducer from "./reducers";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancers = [
  applyMiddleware(...middlewares),
];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Prevent recomputing reducers for `replaceReducer`
      shouldHotReload: false,
    })
    : compose;
/* eslint-enable */

const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers)
);

sagaMiddleware.run(rootSaga);

export default store;
