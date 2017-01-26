var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Calculator = require('Calculator');

describe('Calculator', () => {
  it('should exist', () => {
    expect(Calculator).toExist();
  });

  describe('render', () => {
    it('should render calculator to output', () => {
      var calculator = TestUtils.renderIntoDocument(<Calculator totalCost={1.0555555555555558} />);
      var $el = $(ReactDOM.findDOMNode(calculator));
      var actualText = $el.find('.calculator-text span').text();

      expect(actualText).toBe('1.06');
    });
  });

  describe('formatCost', () => {
    it('should format cost', () => {
      var calculator = TestUtils.renderIntoDocument(<Calculator />);
      var totalCost = 1.0555555555555558;
      var expected = '1.06';
      var actual = calculator.formatCost(totalCost);

      expect(actual).toBe(expected);
    });

    it('should format cost when cost is 0', () => {
      var calculator = TestUtils.renderIntoDocument(<Calculator />);
      var totalCost = 0;
      var expected = '0.00';
      var actual = calculator.formatCost(totalCost);

      expect(actual).toBe(expected);
    });
  });
});
