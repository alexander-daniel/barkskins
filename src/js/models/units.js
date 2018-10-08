import RNG from '_utils/chance';

const randomGender = () => RNG.pick([
  'Male',
  'Female'
]);

const randomProfession = () => RNG.pick([
  'farmer',
  'chef',
  'lumberjack',
  'miner'
]);

export const createNewUnit = () => {
  const gender = randomGender();
  const profession = randomProfession();

  return {
    id: RNG.hash(),
    gender,
    profession,
    name: RNG.first({ gender: gender.toLowerCase() }),
    age: RNG.age({ type: 'adult' }),
    birthday: {
      season: RNG.pick(['spring', 'summer', 'autumn', 'winter']),
      date: RNG.integer({ min: 1, max: 14 })
    },
    attributes: {
      strength: {
        actual: RNG.natural({ min: 1, max: 5 }),
        max: 5
      },
      intelligence: {
        actual: RNG.natural({ min: 1, max: 5 }),
        max: 5
      },
      charisma: {
        actual: RNG.natural({ min: 1, max: 5 }),
        max: 5
      },
      dexterity: {
        actual: RNG.natural({ min: 1, max: 5 }),
        max: 5
      }
    }
  };
};
