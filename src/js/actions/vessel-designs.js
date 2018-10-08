import { createVesselDesign as vesselDesign } from '_models/vessel-designs';

export const UPDATE_VESSEL_DESIGN = 'UPDATE_VESSEL_DESIGN';
export function updateVesselDesign(design) {
  return {
    type: UPDATE_VESSEL_DESIGN,
    designID: design.id,
    design
  };
}

export function createVesselDesign(spec) {
  return (dispatch) => {
    try {
      const des = vesselDesign(spec);
      dispatch(updateVesselDesign(des));
    }

    catch (err) {
      console.error(err);
    }
  };
}
