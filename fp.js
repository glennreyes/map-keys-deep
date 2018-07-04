const { isPlainObject, mapKeys, mapValues } = require('lodash/fp');

const mapKeysDeep = cb => obj =>
  Array.isArray(obj)
    ? obj.map(mapKeysDeep(cb))
    : isPlainObject(obj)
      ? mapValues(mapKeysDeep(cb))(mapKeys(cb)(obj))
      : obj;

module.exports = mapKeysDeep;
