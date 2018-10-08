import Immutable from 'immutable';
import { detailedDiff } from 'deep-object-diff';
import { updateUser } from './user';
import { MESSAGE_TYPE, addMessage } from './messages';
import { createIsland, updateIsland } from './islands';
import { updateCalendar } from './calendar';
import { createUnit, updateUnits } from './units';
import { createBuilding } from './buildings';
import resolveIslands from '_resolvers/islands';
import { readTextFile, encode, decode } from '_utils/files';

const stateTransformer = (combinedState) => {
  const state = combinedState;
  let newState = {};

  for (let i of Object.keys(state)) {
    if (Immutable.Iterable.isIterable(state[i])) {
      newState[i] = state[i].toJS();
    } else {
      newState[i] = state[i];
    }
  }

  return newState;
};

export const startGame = (familyName) => (dispatch) => {
  dispatch(createIsland());
  dispatch(createIsland());
  dispatch(createIsland());

  dispatch(createUnit());
  dispatch(createUnit());
  dispatch(createBuilding());

  dispatch(updateUser({
    socketID: familyName,
    connected: true
  }));

  dispatch(addMessage({
    title: "You've made it!",
    type: MESSAGE_TYPE.WELCOME,
    summary: 'A new empire is established!',
    content: { familyName }
  }));
};

const handleUpdates = (updates) => (dispatch) => {
  Object.keys(updates).forEach((stateSliceName) => {
    const update = updates[stateSliceName];
    switch (stateSliceName) {
      case 'islands':

        Object.keys(update).forEach(islandID => {
          dispatch(updateIsland(islandID, update[islandID]));
        });

        break;

      case 'units':
        dispatch(updateUnits(update));
        break;

      default:
        console.error(`not handling updates to: ${stateSliceName} part of state...`);
        return;
    }
  });
};

const handleAdds = (additions) => (dispatch) => {
  Object.keys(additions).forEach((stateSliceName) => {
    const addition = additions[stateSliceName];
    switch (stateSliceName) {
      case 'buildings':
        Object.keys(addition).forEach((buildingID) => {
          return dispatch(createBuilding(addition[buildingID]));
        });
        break;

      default:
        console.error(`not handling adds to: ${stateSliceName} part of state...`);
        return;
    }
  });
};

const handleDeletes = (deletes) => () => {
  Object.keys(deletes).forEach((stateSliceName) => {
    switch (stateSliceName) {
      default:
        console.error(`not handling deletes to: ${stateSliceName} part of state...`);
        return;
    }
  });
};

export const gameTick = () => (dispatch, getState) => {
  const originalState = stateTransformer(getState());
  let newState = stateTransformer(getState());

  try {
    /*
     * Process resolvers. They each take state and do something to it
     */
    newState = resolveIslands(newState, Object.values(newState.islands));

    /*
     * Get diffed state, but redux store not updated yet.
     */
    const { updated, added, deleted } = detailedDiff(originalState, newState);

    /*
     * Handle all the state updates from the game turn resolution.
     * This step is actually updating the clients redux store state with the results of
     * the turn, as determined by the resolvers above.
     */
    dispatch(handleUpdates(updated));
    dispatch(handleAdds(added));
    dispatch(handleDeletes(deleted));

    /*
     * update the calendar && weather,
     * TODO: i suppose this could come from resolvers as well.
     */
    dispatch(updateCalendar());

    dispatch(addMessage({
        title: 'You have survived another day!',
        summary: 'report',
        type: MESSAGE_TYPE.GENERIC,
        content: 'Blah blah blah'
      }));

    /*
      * Check for GAME OVER
      * If true, will display message and redirect to menu.
      */
    // await dispatch(checkGameOver());
  }

  catch (err) {
    console.error('problem updating state after turn resolution', err);
  }
};

export const saveGame = () => (_, getState) => {
  const state = stateTransformer(getState());

  // JSON serialize the game state and then base64 encode it
  const saveDat = encode(state);

  // Create a fake anchor DOM node and programatically click it so the
  // browser can download the file.
  const aElement = document.createElement('a');
  aElement.setAttribute('href', `data:application/octet-stream,${saveDat}`);
  aElement.setAttribute('download', `${state.user.socketID}.barkskins`);
  aElement.click();
  aElement.remove();
};

export const LOAD_GAME = '@@@@@LOAD_GAME';
export const loadGame = (saveFile) => async (dispatch) => {

  let saveDat;
  let stateJS;

  try {
    // Get the JS `File` from the user and read it
    // as text.
    saveDat = await readTextFile(saveFile);
    // Decode the text into a JS State object to
    // hyrdrate our store initially
    stateJS = decode(saveDat);
  }

  catch (err) {
    throw err;
  }

  // Initialize the store with the save data
  let initialStoreState = {};

  Object.keys(stateJS).forEach(reducerKey => {
    const immutableStateSlice = Immutable.fromJS(stateJS[reducerKey]);
    initialStoreState[reducerKey] = immutableStateSlice;
  });

  dispatch({
    type: LOAD_GAME,
    state: initialStoreState
  });
};
