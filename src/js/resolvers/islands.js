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

// const adjustSize = (state, island) => {
//   const diff = Math.random() > 0.5 ? 5 : -5;
//   const newState = state.setIn(
//     ['islands', island.get('id'), 'size'],
//     island.get('size') + diff
//   );
//   // debugger;
//   return newState;
// };

// const move = (state, island) => {
//   // const diff = Math.random() > 0.5 ? 5 : -5;
//   const newState = state.setIn(
//     ['islands', island.get('id'), 'location'],
//     `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 10)}`
//   );
//   // debugger;
//   return newState;
// };

const resolveIslands = createResolver([
  adjustPopulation,
  // adjustSize,
  // move
]);

export default resolveIslands;
