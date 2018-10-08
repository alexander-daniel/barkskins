import { fromJS } from 'immutable';
import * as vesselDesignActions from '_actions/vessel-designs';

const vesselDesigns = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case vesselDesignActions.UPDATE_VESSEL_DESIGN: {
      const newState = state.mergeIn([action.designID], fromJS(action.design));
      return newState;
    }
    default:
      return state;
  }
};

export default vesselDesigns;
