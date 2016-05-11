import Ember from 'ember';
const { getOwner } = Ember;
import layout from '../templates/components/smart-link-to';

export default Ember.Component.extend({
  layout: layout,
  // cssClass passed to link to or <a> tag
  cssClass: '',
  target: '',
  isRoute: function () {
    return getOwner(this).has('route:' + this.get('link'));
  }.property('link')
});
