var fs = require('fs');
var assert = require('assert');
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('Acceptance: rename manifest on build', function() {
  this.timeout(300000);

  var app;

  function assertExist(path) {
    return function() {
      assert.ok(fs.existsSync(app.filePath(path)), 'File exist: ' + path);
    }
  }

  function assertNotExist(path) {
    return function() {
      assert.ok(!fs.existsSync(app.filePath(path)), 'File exist: ' + path);
    }
  }

  before(function() {
    app = new AddonTestApp();
  });

  it('renames manifest file to manifest.json by default', function() {
    return app
      .create('without-config')
      .then(function() {
        return app.runEmberCommand('build');
      })
      .then(assertExist('dist/manifest.json'))
      .then(assertNotExist('dist/manifest.ember-web-app.json'));
  });

  it('reads name from app configuration', function() {
    return app
      .create('with-config')
      .then(function() {
        return app.runEmberCommand('build');
      })
      .then(assertExist('dist/my-awesome-manifest.json'))
      .then(assertNotExist('dist/manifest.ember-web-app.json'));
  });
});
