import RNG from '_utils/chance';

const WoodEngine = {
  fuelType: '',
  output: 100, // horsepower
  fuelConsumption: 1 // daily consumption of fuel at 100% speed.
};

const CoalEngine = {
  ...WoodEngine,
  fuelType: 'coal',
  output: 150
};

export const Equipment = {
  WoodEngine,
  CoalEngine
};

export const createVesselDesign = (props) => {
  return {
    id: RNG.hash(),
    vesselClassName: '',
    size: 0,
    // weight: 0, // Derived?
    // costToBuild ? Derived?
    hullMaterial: '',
    equipment: {},
    ...props
  };
};
