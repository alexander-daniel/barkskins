import RNG from '_utils/chance';
import { createGeoKey } from '_utils/geokey';

function getRandomTerrain() {
  return RNG.pick([
    'Hills',
    'Mountains',
    'Plains'
  ]);
}

function getDescription(terrain) {
  switch (terrain) {
    case 'Hills':
      return 'Rolling hills as far as the eye can see. This seems a good place as any to settle down.';
    case 'Mountains':
      return 'Rocky escarpments and dangerous cliffs abound. Lucky there are abundant mineral prospects here.';
    case 'Plains':
      return 'A lush place to grow! Let us hope we can still defend our new island.';
    default:
      throw new Error(`No description for terrain ${terrain}`);
  }
}

export const createNewIsland = (islandName = RNG.city()) => {
  const terrain = getRandomTerrain();
  return {
    id: RNG.hash(),
    name: islandName,
    terrain,
    location: createGeoKey(RNG.integer({ min: -20, max: 20 }), RNG.integer({ min: -20, max: 20 })),
    description: getDescription(terrain),
    owner: null,
    population: 100,
    size: RNG.integer({ min: 1, max: 5 }),
    stockpile: {
      gold: 0,
      wood: 0,
      coal: 0,
      stone: 0,
      rations: 25,
      grain: 0
    },
    resources: {
      gold: 50,
      wood: 200,
      stone: 50,
      coal: 250
    }
  };
};
