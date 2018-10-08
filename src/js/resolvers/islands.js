import { createResolver } from '_utils/resolver';

const adjustPopulation = (state, island) => {
  const islandID = island.id;
  const selectedIsland = state.islands[islandID];

  return {
    ...state,
    islands: {
      ...state.islands,
      [islandID]: {
        ...selectedIsland,
        population: selectedIsland.population + 1
      }
    }
  };
};

// Just a dummy resolver to see some action on the UI.
const move = (state, island) => {
  const islandID = island.id;
  const selectedIsland = state.islands[islandID];

  return {
    ...state,
    islands: {
      ...state.islands,
      [islandID]: {
        ...selectedIsland,
        location: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 10)}`
      }
    }
  };
};

const resolveIslands = createResolver([
  adjustPopulation,
  move
]);

export default resolveIslands;
