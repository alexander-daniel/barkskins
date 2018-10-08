import { fromJS } from 'immutable';
import * as islandActions from '_actions/islands';

const island = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case islandActions.UPDATE_ISLAND: {
      const newState = state.mergeIn([action.islandID], fromJS(action.island));
      return newState;
    }
    default:
      return state;
  }
};

export default island;
