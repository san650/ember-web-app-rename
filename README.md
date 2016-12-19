# ember-web-app-rename
[![Build Status](https://travis-ci.org/san650/ember-web-app-rename.svg?branch=master)](https://travis-ci.org/san650/ember-web-app-rename)

This addon is part of [`ember-web-app`](https://github.com/san650/ember-web-app). It implements the manifest rename functionality used by `ember-web-app` that needs to be a separate addon so it can be _executed_ after `broccoli-asset-rev` is _executed_ (see san650/ember-web-app#23).

## Example

`config/environment.js`

```js
module.exports = function(environment) {
  ...

  ENV['ember-web-app'] = {
    name: 'my-awesome-manifest.json'
  };

  return ENV;
};
```

It will rename the manifest file from `manifest.ember-web-app.conf` to `my-awesome-manifest.json`.

## Installation

This addon is included automatically by [`ember-web-app`](https://github.com/san650/ember-web-app). It's not supposed to be installed by hand.

## Development

```sh
$ git clone https://github.com/san650/ember-web-app-rename.git
$ cd $_
$ yarn          # (or npm install)
```

Running tests

```sh
$ npm test
```

## Project's health

[![Build Status](https://travis-ci.org/san650/ember-web-app-rename.svg?branch=master)](https://travis-ci.org/san650/ember-web-app-rename)
[![Ember Observer Score](https://emberobserver.com/badges/ember-web-app-rename.svg)](https://emberobserver.com/addons/ember-web-app-rename)

## License

ember-web-app-rename is licensed under the MIT license.

See [LICENSE](./LICENSE) for the full license text.
