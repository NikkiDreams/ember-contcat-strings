/* jshint node: true */
'use strict';

var path = require('path');
module.exports = {
  name: 'ember-concat-strings',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/ember-concat-strings/dist/concat-strings.js');
    this.app.import('vendor/ember-concat-strings/shim.js', {
      type: 'vendor',
      exports: { 'concatStrings': ['default'] }
    });
  }
};
