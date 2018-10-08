import { fromJS } from 'immutable';
import * as vesselsActions from '_actions/vessels';

const vessels = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case vesselsActions.UPDATE_VESSEL: {
      const newState = state.mergeIn([action.vesselID], fromJS(action.vessel));
      return newState;
    }
    default:
      return state;
  }
};

export default vessels;
