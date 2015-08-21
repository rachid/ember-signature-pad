import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('signature-pad', 'Integration | Component | signature pad', {
    integration: true
});

test('it renders', function(assert) {
    assert.expect(1);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{signature-pad}}`);

    assert.equal(this.$().text().trim(), '');
});

test('it saves pen strokes', function(assert) {
    assert.expect(1);
    this.set('value', Ember.A());
    this.render(hbs`{{signature-pad value=value}}`);

    this.$('.signature-pad').trigger('mousedown');
    this.$('.signature-pad').trigger('mouseup');

    assert.equal(this.get('value').length, '1');
});
