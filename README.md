# @lapidist/linting

[![GitHub Release](https://img.shields.io/github/release/bylapidist/linting.svg?style=flat)](https://github.com/bylapidist/linting/releases)
[![GitHub Issues](https://img.shields.io/github/issues/bylapidist/linting.svg?style=flat)](https://github.com/bylapidist/linting/issues)
[![Dependencies](https://david-dm.org/bylapidist/linting/status.svg?style=flat)](https://david-dm.org/bylapidist/linting)
[![Dev Dependencies](https://david-dm.org/bylapidist/linting/dev-status.svg)](https://david-dm.org/bylapidist/linting?type=dev)
[![Build Status](https://github.com/bylapidist/linting/workflows/Release/badge.svg)](https://github.com/bylapidist/linting/actions?query=workflow%3ARelease)

## Quickstart

```bash
npm install --save-dev @lapidist/linting
```

Extend your config in `.eslintrc.js` and `.prettierrc.js` as follows:

```js
const { eslintConfig } = require('@lapidist/linting');
module.exports = eslintConfig;
```

```js
const { prettierConfig } = require('@lapidist/linting');
module.exports = prettierConfig;
```

## License
`@lapidist/linting` is licensed under the MIT license. See LICENSE for the full text.
