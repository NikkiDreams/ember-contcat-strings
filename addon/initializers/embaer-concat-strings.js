import Ember from 'ember';
import { ConcatStrings } from 'ember-remarkable/helpers/md-remarkable';

export function initialize(/* container, application */) {
  Ember.Handlebars.helper('cs', ConcatStrings);
};

export default {
  name: 'embaer-concat-strings',
  initialize: initialize
};
