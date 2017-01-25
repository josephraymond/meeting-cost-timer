var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var Calculator = require('Calculator');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped',
      cost: 0,
      people: [
        {
          id: 1,
          person: 'Joey',
          costPerHour: 60,
          isInMeeting: true
        },
        {
          id: 2,
          person: 'Graham',
          costPerHour: 60,
          isInMeeting: true
        },
        {
          id: 3,
          person: 'Nick',
          costPerHour: 60,
          isInMeeting: false
        }
      ]
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          this.calculateCost(this.state.people);
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },

  calculateCost: function (people) {
    var totalCostPerHour = people.reduce(function (prev, curr) {
      return prev + curr.costPerHour;
    }, 0);
    var totalCostPerSecond = totalCostPerHour / 3600;

    this.setState({
      cost: totalCostPerSecond
    });
  },

  startTimer: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        cost: this.state.cost + 1
      });
    }, 1000);
  },

  render: function () {
    var {count, timerStatus, cost} = this.state;
    return (
      <div>
        <Calculator totalCost={cost} />
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
});

module.exports = Timer;
