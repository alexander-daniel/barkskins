import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

const loggerMiddleware = createLogger({
  collapsed: true,
  timestamp: false,
  duration: true,
  diff: true,

  // This function transforms all the nested immutable structures in our state into plain JS
  stateTransformer: (state) => {
    let newState = {};

    for (let i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }

    return newState;
  }
});

export default loggerMiddleware;
