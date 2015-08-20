import Ember from 'ember';

export default Ember.Controller.extend({
    signature: null,

    actions: {
        reset: function() {
            this.set('signature', null);
        }
    }
});
