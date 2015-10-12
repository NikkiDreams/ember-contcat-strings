import Ember from 'ember';

export function concatStrings(params/*, hash*/) {
  name: "concat-strings",
  var str = "", i = 0;
  while (params[i]) {
      str += params[i];
      i++;
  }
  var escaped = Handlebars.Utils.escapeExpression(str);
  return new Ember.Handlebars.SafeString(escaped);
}

export default Ember.Helper.extend(concatStrings));