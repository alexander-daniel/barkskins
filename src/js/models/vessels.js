import RNG from '_utils/chance';

export const createVessel = () => {
  return {
    id: RNG.hash()
  };
};
