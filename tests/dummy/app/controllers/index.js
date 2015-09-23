import Ember from 'ember';

export default Ember.Controller.extend({
    signature: Ember.computed(function () {
        return Ember.A();
    }),
    stringifiedSignature: Ember.computed('signature.[]', function() {
        return JSON.stringify(this.get('signature'));
    }),
    actions: {
        reset: function() {
            this.set('signature', Ember.A());
        }
    }
});
