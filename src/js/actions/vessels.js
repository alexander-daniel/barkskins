import { createVessel as createNewVessel } from '_models/vessels';

export const UPDATE_VESSEL = 'UPDATE_VESSEL';
export function updateVessel(vesselID, vessel) {
  return {
    type: UPDATE_VESSEL,
    vesselID,
    vessel
  };
}

export function createVessel() {
  return (dispatch) => {
    try {
      const vessel = createNewVessel();
      dispatch(updateVessel(vessel.id, vessel));
    }

    catch (err) {
      console.error(err);
    }
  };
}
