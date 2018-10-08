const minMax = (value, min, max) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const createLimiter = (min, max) => (value) => minMax(value, min, max);

export default createLimiter;
