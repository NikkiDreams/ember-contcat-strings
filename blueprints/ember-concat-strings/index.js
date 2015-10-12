module.exports = {
  description: "",

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject({name:'ember-concat-strings', verion:'0.0.2'});
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
