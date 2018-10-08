import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from '_utils/logger-middleware';
import rootReducer from '_reducers/index';
import AppRoot from '_components/views/index';
import '../scss/style.scss';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

window.dispatch = store.dispatch;
window.getState = store.getState;

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('root')
);
