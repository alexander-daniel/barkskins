import { createNewIsland } from '_models/islands';

export const UPDATE_ISLAND = 'UPDATE_ISLAND';
export function updateIsland(islandID, island) {
  return {
    type: UPDATE_ISLAND,
    islandID,
    island
  };
}

export function createIsland(islandName) {
  return (dispatch) => {
    try {
      const island = createNewIsland(islandName);
      dispatch(updateIsland(island.id, island));
      return island;
    }

    catch (err) {
      console.error(err);
    }
  };
}
