export const createGeoKey = (x, y) => `${x}:${y}`;
export const getCoords = (geoKey) => {
  const [ x, y ] = geoKey.split(':');
  return { x: parseInt(x, 10), y: parseInt(y, 10) };
};
