import Ember from 'ember';
import layout from '../templates/components/smart-link-to';

export default Ember.Component.extend({
  layout: layout,
  // cssClass passed to link to or <a> tag
  cssClass: '',
  target: '_self',
  isRoute: function () {
    return this.get('container').has('route:' + this.get('link'));
  }.property('link')
});
