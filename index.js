const mapKeysDeep = require('./fp');

module.exports = (obj, cb) => mapKeysDeep(cb)(obj);
