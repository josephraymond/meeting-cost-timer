var React = require('react');

var Calculator = React.createClass({
  propTypes: {
    totalCost: React.PropTypes.number.isRequired
  },

  render: function () {
    return (
      <div>
        <h1>
          <sup>$</sup>
          {this.props.totalCost}
        </h1>
      </div>
    )
  }
});

module.exports = Calculator;
