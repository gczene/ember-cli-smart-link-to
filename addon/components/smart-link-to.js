import Ember from 'ember';
import layout from '../templates/components/smart-link-to';

export default Ember.Component.extend({
  layout,
  cssClass: '',
  target: '',
  isRoute: Ember.computed('link', function () {
    // return this.get('container').has('route:' + this.get('link'));
    return Ember.getOwner(this).hasRegistration('route:' + this.get('link'));
  })
});
