module.exports = {
  description: "",

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject('ember-concat-strings');
  }


  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
