import { fromJS } from 'immutable';
import { UPDATE_USER } from '_actions/user';

const user = (
  state = fromJS({
    connected: false,
    socketID: null
  }),
  action
) => {
  switch (action.type) {
    case UPDATE_USER:
      return state.merge(fromJS(action.payload));

    default:
      return state;
  }
};

export default user;
