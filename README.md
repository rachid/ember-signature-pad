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
  // array of points that make up the signature
  signature: [],

  actions: {
      // clears the signature pad
      reset: function() {
          this.set('signature', []);
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
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
