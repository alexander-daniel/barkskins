import { createLogger } from 'redux-logger';
import stateTransformer from '_utils/state-transformer';

const loggerMiddleware = createLogger({
  collapsed: true,
  timestamp: false,
  duration: true,
  diff: true,

  // This function transforms all the nested immutable structures in our state into plain JS
  stateTransformer
});

export default loggerMiddleware;
