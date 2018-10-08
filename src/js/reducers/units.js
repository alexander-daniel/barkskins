import { fromJS } from 'immutable';
import * as actions from '_actions/units';

const units = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case actions.UPDATE_UNIT: {
      return state.mergeIn([action.unitID], action.unit);
    }

    case actions.UPDATE_UNITS: {
      let newState = state;

      Object.keys(action.units).forEach((unitID) => {
        const unitUpdate = action.units[unitID];
        newState = newState.mergeIn([unitID], unitUpdate);
      });

      return newState;
    }

    default:
      return state;
  }
};

export default units;
