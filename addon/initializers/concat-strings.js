import Ember from 'ember';
import { ConcatStrings } from 'ember-concat-strings/helpers/concat-strings';

export function initialize(/* container, application */) {
  Ember.Handlebars.helper('concat-strings', ConcatStrings);
};

export default {
  name: 'concat-strings',
  initialize: initialize
};
