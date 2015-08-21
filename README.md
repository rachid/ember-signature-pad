# ember-signature-pad

This is an ember-cli addon component that allows for users to draw their own signature in a canvas element.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Usage

```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
    signature: Ember.A(),
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
    value=signature
    width=386
    height=68
}}
<button {{action "reset"}}>Reset</button>
<div><code>{{stringifiedSignature}}</code></div>
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
