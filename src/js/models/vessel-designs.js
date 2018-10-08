import RNG from '_utils/chance';

export const createVesselDesign = () => {
  return {
    id: RNG.hash(),
    vesselClassName: '',
    size: 0,
    // weight: 0, // Derived?
    hullMaterial: '',
    equipment: {}
  };
};
