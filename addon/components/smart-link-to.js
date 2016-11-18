import Ember from 'ember';
import layout from '../templates/components/smart-link-to';

export default Ember.Component.extend({
  layout,
  cssClass: '',
  target: '',
  tagName: '',
  isRoute: Ember.computed('link', function () {
    return Ember.getOwner(this).hasRegistration('route:' + this.get('link'));
  })
});
