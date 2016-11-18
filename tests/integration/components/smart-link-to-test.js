import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('smart-link-to', 'Integration | Component | smart link to', {
  integration: true
});

test('smart-link-to component', function(assert) {

  this.set('container', Ember.getOwner(this));
  this.render(hbs`
    {{smart-link-to link="testLink" label="testLabel" cssClass="testClass" target="_blank"}}
  `);

  assert.equal(this.$('a').text().trim(), 'testLabel', 'should render label into <a> tag');
  assert.equal(this.$('a').hasClass('testClass'), true, 'should add custom css class');
  assert.equal(this.$('a').attr('href'), 'testLink', 'should set testLink to href');
  assert.equal(this.$('a').attr('target'), '_blank', 'should set target if passed');
});
