# map-keys-deep

[![Build Status](https://travis-ci.org/glennreyes/map-keys-deep.svg?branch=master)](https://travis-ci.org/glennreyes/map-keys-deep) [![Coverage Status](https://coveralls.io/repos/github/glennreyes/map-keys-deep/badge.svg?branch=master)](https://coveralls.io/github/glennreyes/map-keys-deep?branch=master)

🔑 Maps object keys recursively, like [`mapKeys`](https://lodash.com/docs/#mapKeys) by Lodash but recursive.

# Usage

## Install

```
yarn add map-keys-deep
```

## Simple sample usage

```js
import mapKeysDeep from 'map-keys-deep';

mapKeysDeep({ Hello: { World: true } }, keys => keys.toLowerCase());
// { hello: { world: true } }
```

## FP style

```js
import { camelCase } from 'lodash/fp';
import mapKeysDeep from 'map-keys-deep/fp';

mapKeysDeep(camelCase)({ hello_world: { bye_world: true } });
// { helloWorld: { byeWorld: true } }

mapKeysDeep(keys => keys.toLowerCase())({ Hello: { World: true } });
// { hello: { world: true } }
```

## Test

```js
yarn jest
```

# License

MIT
