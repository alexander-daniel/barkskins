import { fromJS } from 'immutable';
import * as actions from '_actions/empires';

const empires = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case actions.UPDATE_EMPIRE: {
      return state.mergeIn([action.empireID], action.empire);
    }

    default:
      return state;
  }
};

export default empires;
