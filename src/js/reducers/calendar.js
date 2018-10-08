import { fromJS } from 'immutable';
import * as actions from '_actions/calendar';

const calendar = (
  state = fromJS({
    tick: 0,
    date: 1,
    season: 'spring',
    year: 28,
    weather: 'fair'
  }),
  action
) => {
  switch (action.type) {
    case actions.UPDATE_CALENDAR:
      return state.merge(action.options);

    default:
      return state;
  }
};

export default calendar;
