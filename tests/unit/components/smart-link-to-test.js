import { moduleForComponent, test } from 'ember-qunit';
import Em from 'ember';

moduleForComponent('smart-link-to', 'Unit | Component | smart link to', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function (assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('should render an <a> tag', function (assert) {
  var injection = {
    link: 'testLink',
    label: 'testLabel',
    cssClass: 'testClass'
  },
  $component;

  this.subject(injection);
  $component = this.$();

  assert.equal(Em.$('a', $component).length, 1);
});

test('should render an <a> tag', function (assert) {
  var injection = {
    link: 'testLink',
    label: 'testLabel',
    cssClass: 'testClass',
    target: '_self'
  },
  $component;

  this.subject(injection);
  $component = this.$();

  assert.equal(
    Em.$('a', $component).attr('href'),
    injection.link,
    'with the same href as the injected'
  );

  assert.equal(
    Em.$('a', $component).text(),
    injection.label,
    'with the same label as the injected'
  );

  assert.equal(
    Em.$('a', $component).attr('target'),
    '_self',
    'with target="_self"'
  );
});

test('should render an <a> tag', function (assert) {
  var injection = {
    link: 'testLink',
    label: 'testLabel',
    cssClass: 'testClass',
    target: '_blank'
  },
  $component;

  this.subject(injection);
  $component = this.$();

  assert.equal(
    Em.$('a', $component).attr('target'),
    '_blank',
    'with target="_blank"'
  );
});
