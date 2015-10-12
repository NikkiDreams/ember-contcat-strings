/* jshint node: true */
'use strict';

var path = require('path');
module.exports = {
  name: 'concat-strings',

  isDevelopingAddon: function() {
    return true;
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    this._super.included(target);
    /*
    this.app.import(app.bowerDirectory + '/ember-concat-strings/dist/concat-strings.js');
    this.app.import('vendor/ember-concat-strings/shim.js', {
      type: 'vendor',
      exports: { 'concatStrings': ['default'] }
    });
  */
  }
};
