var React = require('react');

var Calculator = React.createClass({
  getDefaultProps: function () {
    totalCost: 0
  },

  propTypes: {
    totalCost: React.PropTypes.number
  },

  formatCost: function (totalCost) {
    return parseFloat(Math.round(totalCost * 100) / 100).toFixed(2);
  },

  render: function () {
    var {totalCost} = this.props;

    return (
      <div className="calculator">
        <h1 className="calculator-text">
          <sup>$</sup>
          <span>{this.formatCost(totalCost)}</span>
        </h1>
      </div>
    )
  }
});

module.exports = Calculator;
