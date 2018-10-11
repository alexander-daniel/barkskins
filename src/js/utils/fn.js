export const pipe = (...fns) => {
  return (x, ...args) => {
    return fns.reduce((v, f) => {
      try { return f(v, ...args); }
      catch (err) { return v; }
    }, x);
  };
};

/*
 * https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
 * https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
 *
 * Pass in an Object and an array of key paths
 * const obj = { people: { 'jim': { age: 20 } } };
 * getNestedObject(obj, ['people', 'jim']) -> // { age: 20 }
 * getNestedObject(obj, ['people', 'jim', 'age']) -> // 20
 */
export const getIn = (o, p) => p.reduce((obj, k) => (obj && obj[k]) ? obj[k] : null, o);

// Come up with a better name
export const forEach = (itemKey, fn) => (state) => {
  const stateSlice = getIn(state, itemKey.split('.'));
  const items = Array.isArray(stateSlice) ? stateSlice : Object.values(stateSlice);
  return items.reduce((acc, curr) => fn(acc, curr), state);
};
