import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from 'remote-redux-devtools';

import rootReducer from '../rootReducer';

const createDevStore = middleware => {
  const devCompose = composeWithDevTools({realtime: true});
  const store = createStore(rootReducer, devCompose(
    applyMiddleware(...middleware),
  ));

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

const createProdStore = middleware =>
  createStore(rootReducer, null, compose(applyMiddleware(...middleware)));

export const configureStore = () => {
  const middleware = [
    thunkMiddleware,
    promiseMiddleware(),
  ];

  return __DEV__ ? createDevStore(middleware) : createProdStore(middleware); // eslint-disable-line
};
