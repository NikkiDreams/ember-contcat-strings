import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('concat-strings', 'Integration | Component | concat-strings', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{concat-strings}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  /*
  this.render(hbs`
    {{#concat-strings}}
      template block text
    {{/concat-strings}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
