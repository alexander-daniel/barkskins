import RNG from '_utils/chance';

export const UPDATE_VESSEL_DESIGN = 'UPDATE_VESSEL_DESIGN';
export function updateVesselDesign(designID, design) {
  return {
    type: UPDATE_VESSEL_DESIGN,
    designID,
    design
  };
}

export function createVesselDesign(spec) {
  return (dispatch) => {
    try {
      const design = {
        id: RNG.hash(),
        name: spec.name
      };
      dispatch(updateVesselDesign(design.id, design));
    }

    catch (err) {
      console.error(err);
    }
  };
}
