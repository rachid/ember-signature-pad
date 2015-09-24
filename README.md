# ember-signature-pad

This is an ember-cli addon component that allows for users to draw their own signature in a canvas element.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.
* Demo the app at [http://ember-signature-pad.divshot.io](http://ember-signature-pad.divshot.io)

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Usage

```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
    color: '#008',  // default
    height: 68,     // default
    weight: 1,      // default
    width: 386,     // default
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

```

```handlebars
{{signature-pad
    color=color
    height=height
    value=signature
    weight=weight
    width=width
}}
<button {{action "reset"}}>Reset</button>
<div><code>{{stringifiedSignature}}</code></div>
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
