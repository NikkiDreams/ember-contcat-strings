import Ember from 'ember';

export function concatStrings(params/*, hash*/) {
  var str = "", i = 0;
  while (params[i]) {
      str += params[i];
      i++;
  }
  return str;
}

export default Ember.Helper.helper(concatStrings);