import { fromJS } from 'immutable';
import * as actions from '_actions/messages';

const messages = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case actions.ADD_MESSAGE:
      return state.set(action.messageID, fromJS(action.message));

    case actions.UPDATE_MESSAGE:
      return state.mergeIn([action.messageID], action.update);

    default:
      return state;
  }
};

export default messages;
