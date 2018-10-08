const pipe = (...fns) => {
  return (x) => {
    return fns.reduce((v, f) => {
      return f(v);
    }, x);
  };
};

export const readTextFile = (file) => new Promise(resolve => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.readAsText(file);
});

/*
 * same as:
 * (stateObject) => btoa(encodeURIComponent(JSON.stringify(stateObject)));
 *
 * also same as:
 * (stateObject) => {
 *   const stateString = JSON.stringify(stateString);
 *   const uriEncodedStateString = encodeURIComponent(stateString);
 *   const base64SaveDataString = btoa(uriEncodedStateString);
 *   return base64SaveDataString;
 * }
 */
export const encode = pipe(
  JSON.stringify,
  encodeURIComponent,
  btoa
);

// same as: (encodedData) => JSON.parse(decodeURIComponent(atob(encodedData)))
export const decode = pipe(
  atob,
  decodeURIComponent,
  JSON.parse
);
