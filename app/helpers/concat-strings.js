import Ember from 'ember';
import { ConcatStrings } from 'ember-concat-strings/helpers/concat-strings';
//import ConcatStrings from 'ember-concat-strings/helpers/concat-strings';

var concatStrings = null;

if (Ember.Helper) {
  forExport = Ember.Helper.helper(ConcatStrings);
} else if (Ember.HTMLBars.makeBoundHelper) {
  forExport = Ember.HTMLBars.makeBoundHelper(ConcatStrings);
}

export default concatStrings;
