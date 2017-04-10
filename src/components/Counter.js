import React, { Component } from 'react';
import { connect } from 'react-redux';

import Value from './Value';
import Control from './Control';
// import { connect, bindActionCreators } from 'react-redux';


import * as actions from '../actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setRandomColor() {
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
    ];

    this.props.handleSetColor(color);
  }

  render() {
    const color = this.props.color;
    const style = {
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
    };

    return (
      <div style={style}>
        <Value number={this.props.number} />
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onRandomizeColor={this.setRandomColor}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number: state.counter.number,
  color: state.ui.color,
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: () => { dispatch(actions.increment()); },
  handleDecrement: () => { dispatch(actions.decrement()); },
  handleSetColor: (color) => { dispatch(actions.setColor(color)); },
  // return bindActionCreators(actions, dispatch); action
});

Counter.propTypes = {
  handleSetColor: React.PropTypes.func.isRequired,
  color: React.PropTypes.array.isRequired,
  number: React.PropTypes.number.isRequired,
  handleIncrement: React.PropTypes.func.isRequired,
  handleDecrement: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// mapStateToProps
// mapDispatchToProps
// mergeProps
// options
