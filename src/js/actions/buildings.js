import RNG from '_utils/chance';

export const UPDATE_BUILDING = 'UPDATE_BUILDING';
export function updateBuilding(buildingID, building) {
  return {
    type: UPDATE_BUILDING,
    buildingID,
    building
  };
}

export const UPDATE_BUILDINGS = 'UPDATE_BUILDINGS';
export function updateBuildings(buildings) {
  return {
    type: UPDATE_BUILDINGS,
    buildings
  };
}

export function createBuilding(spec = {
  type: 'tent',
  attributes: [
    'lodging'
  ],
  location: '2:2',
  sleeps: 2
}) {
  return (dispatch) => {
    try {
      const building = Object.assign({
        id: RNG.hash()
      }, spec);

      dispatch(updateBuilding(building.id, building));
    }

    catch (err) {
      console.error(err);
    }
  };
}
