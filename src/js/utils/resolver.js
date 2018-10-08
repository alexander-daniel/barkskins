/*
 * create Root resolvers for lists of game items.
 *
 * Passes each thing to a sub-reducer
 * and gets the new game state each time. this means that
 * each unit has full access to the rest of the gameState
 * inside its own reducer chain call
 */
export function createResolver(reducers = [], filterFunc) {
  return (initialState, items = []) => {
    return items.reduce((state, item) => {

      if (filterFunc && !filterFunc(item)) {
        return state;
      }

      // Run the unit through the chain of resolver functions
      // and keep collecting the resulting state.
      return reducers.reduce((accumlatedState, currentResolver) => {
        return currentResolver(accumlatedState, item);
      }, state);

    }, initialState);
  };
}
