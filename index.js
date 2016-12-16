/* jshint node: true */
'use strict';

var MANIFEST_TEMP_NAME = 'manifest.ember-web-app.json';
var MANIFEST_NAME = 'manifest.json';

module.exports = {
  name: 'ember-web-app-rename',

  included: function(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
    this.addonConfig = this.app.project.config(app.env)['ember-web-app'] || {};

    this._super.included.apply(this, arguments);
  },

  treeFor: function() {},

  postprocessTree: function(type, tree) {
    var rename;

    if (type === 'all') {
      rename = require('broccoli-stew').rename;

      tree = rename(tree, MANIFEST_TEMP_NAME, this.addonConfig.name || MANIFEST_NAME);
    }

    return tree;
  }
};
