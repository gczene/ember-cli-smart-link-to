[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)

# Ember-cli-smart-link-to

Component to handle external URLs/paths not just routes as link-to helper.

Example problem to resolve: given an array of objects where a `link` property can contain either route or URL. If not a route is passed to `{{link-to}}` that would throw an error.

**Important**

This component uses block form.

## Usage:
```html
          {{#smart-link-to label="Tell me more" link=myLink}}
            <i class="fa fa-angle-right"></i>
          {{/smart-link-to}}
```
The string in the **block form** is passed before the `<a></a>` tag. See below:


## Output
If `myLink` in the previous example is an existing route, e.g. in your router.js:
```javascript
//router.js
  this.route('myRoute', {path: '/itIsMyPath'});
```

will be rendered as

```html
<a href="/itIsMyPath">
  <i class="fa fa-angle-right"></i>
  Tell me more
</a>
```
If it is `not` an existing route it will render the usual `<a>` tag.

## Options:

Option  | Description
------------- | -------------
target  | target attribute for `<a>` tag.
cssClass  | added to `<a class="">` attribute



## Installation

* `ember install ember-cli-smart-link-to`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
