import { fromJS } from 'immutable';
import * as actions from '_actions/buildings';

const buildings = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case actions.UPDATE_BUILDING: {
      return state.mergeIn([action.buildingID], action.building);
    }

    case actions.UPDATE_BUILDINGS: {
      let newState = state;

      Object.keys(action.buildings).forEach((buildingID) => {
        const buildingUpdate = action.buildings[buildingID];
        newState = newState.mergeIn([buildingID], buildingUpdate);
      });

      return newState;
    }

    default:
      return state;
  }
};

export default buildings;
