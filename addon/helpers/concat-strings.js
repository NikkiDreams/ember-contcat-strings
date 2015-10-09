import Ember from 'ember';
import Concat from 'concatStings';

export function concatStrings(params/*, hash*/) {
  var str = "", i = 0;
  while (params[i]) {
      str += params[i];
      i++;
  }
  return str;


  var cs = new ConcatStrings();
  return new Ember.Handlebars.SafeString(cs.render(str));
}

export default Ember.Helper.helper(concatStrings);
