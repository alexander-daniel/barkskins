import Immutable from 'immutable';

// This function transforms all the nested immutable structures in our state into plain JS
const stateTransformer = (combinedState) => {
  const state = combinedState;
  let newState = {};

  for (let i of Object.keys(state)) {
    if (Immutable.Iterable.isIterable(state[i])) {
      newState[i] = state[i].toJS();
    } else {
      newState[i] = state[i];
    }
  }

  return newState;
};

export default stateTransformer;
