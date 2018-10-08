import { combineReducers } from 'redux';
import buildings from './buildings';
import calendar from './calendar';
import empires from './empires';
import islands from './islands';
import messages from './messages';
import sounds from './sounds';
import units from './units';
import user from './user';
import vessels from './vessels';
import vesselDesigns from './vessel-designs';
import { LOAD_GAME } from '_actions/game';

const appReducer = combineReducers({
  buildings,
  calendar,
  empires,
  islands,
  messages,
  sounds,
  units,
  user,
  vessels,
  vesselDesigns
});

const rootReducer = (state, action) => {

  if (action.type === LOAD_GAME) {
    return appReducer(action.state, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
