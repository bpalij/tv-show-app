export default function(headers) {
  return [ ...headers.entries() ].reduce((acc, val) => {
    acc[`${val[0]}`] = val[1];
    return acc;
  }, {});
}