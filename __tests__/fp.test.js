const { camelCase } = require('lodash/fp');
const mapKeysDeep = require('../fp');

test('camelCase keys of plain objects', () => {
  expect(
    mapKeysDeep(camelCase)({ banana_pie: null, APPLE_JUICE: null }),
  ).toEqual({ bananaPie: null, appleJuice: null });

  expect(mapKeysDeep(camelCase)({ bananaPie: null })).toEqual({
    bananaPie: null,
  });

  expect(
    mapKeysDeep(camelCase)({
      banana_pie: { banana_pie: { banana_pie: null } },
    }),
  ).toEqual({
    bananaPie: { bananaPie: { bananaPie: null } },
  });
});

test('camelCase keys of plain objects with array of objects', () => {
  expect(
    mapKeysDeep(camelCase)({
      pies: [{ banana_pie: { banana_pie: null } }, { apple_pie: null }],
    }),
  ).toEqual({ pies: [{ bananaPie: { bananaPie: null } }, { applePie: null }] });
});

test('Do nothing on non plain objects', () => {
  expect(mapKeysDeep(camelCase)('foo')).toEqual('foo');
  expect(mapKeysDeep(camelCase)(123)).toEqual(123);
  expect(mapKeysDeep(camelCase)(false)).toEqual(false);
  expect(mapKeysDeep(camelCase)(null)).toEqual(null);
  expect(mapKeysDeep(camelCase)(undefined)).toEqual(undefined);

  const now = new Date();
  expect(mapKeysDeep(camelCase)(now)).toEqual(now);
});
