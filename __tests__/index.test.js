const { camelCase } = require('lodash');
const mapKeysDeep = require('..');

test('camelCase keys of plain objects', () => {
  expect(
    mapKeysDeep({ banana_pie: null, APPLE_JUICE: null }, camelCase),
  ).toEqual({ bananaPie: null, appleJuice: null });

  expect(mapKeysDeep({ bananaPie: null }, camelCase)).toEqual({
    bananaPie: null,
  });

  expect(
    mapKeysDeep(
      {
        banana_pie: { banana_pie: { banana_pie: null } },
      },
      camelCase,
    ),
  ).toEqual({
    bananaPie: { bananaPie: { bananaPie: null } },
  });
});

test('camelCase keys of plain objects with array of objects', () => {
  expect(
    mapKeysDeep(
      {
        pies: [{ banana_pie: { banana_pie: null } }, { apple_pie: null }],
      },
      camelCase,
    ),
  ).toEqual({ pies: [{ bananaPie: { bananaPie: null } }, { applePie: null }] });
});

test('Do nothing on non plain objects', () => {
  expect(mapKeysDeep('foo', camelCase)).toEqual('foo');
  expect(mapKeysDeep(123, camelCase)).toEqual(123);
  expect(mapKeysDeep(false, camelCase)).toEqual(false);
  expect(mapKeysDeep(null, camelCase)).toEqual(null);
  expect(mapKeysDeep(undefined, camelCase)).toEqual(undefined);

  const now = new Date();
  expect(mapKeysDeep(now, camelCase)).toEqual(now);
});
