import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import formatTime from 'utils/formatTime';

const initialState = {
  active: false,
  paused: false,
  currentTime: 0
};

class Timer extends Component {
  state = initialState

  componentWillMount() {
    this.setState({
      ...initialState,
      currentTime: this.props.settings.pomodoroTime * 60
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    if (this.state.currentTime !== 0) {
      this.setState(({ currentTime }) => ({ currentTime: currentTime - 1 }));
    } else {
      this.swapTimer();
    }
  }

  swapTimer = () => {
    console.log('yo');
  }

  stopTimer = () => {
    this.setState({
      ...initialState,
      currentTime: this.props.settings.pomodoroTime * 60
    }, () => {
      clearInterval(this.interval);
    });
  }

  startTimer = () => {
    this.setState((state) => ({
      ...state,
      active: true,
      paused: false
    }), () => {
      this.interval = setInterval(this.tick, 1000);
    });
  }

  pauseTimer = () => {
    this.setState((state) => ({
      ...state,
      paused: true
    }), () => {
      clearInterval(this.interval);
    });
  }

  renderTime(currentTime) {
    const seconds = formatTime(currentTime % 60);
    const minutes = formatTime(currentTime / 60);

    return <p>{`${minutes}:${seconds}`}</p>;
  }

  render() {
    const { active, paused, currentTime } = this.state;

    return (
      <div>
        <div>
          {this.renderTime(currentTime)}
        </div>

        <div>
          <button disabled={active} onClick={this.startTimer}>
            <Icon name="play" />
          </button>

          <button disabled={!active} onClick={this.stopTimer}>
            <Icon name="stop" />
          </button>

          {paused === false ? (
            <button disabled={!active} onClick={this.pauseTimer}>
              <Icon name="pause" />
            </button>
          ) : (
            <button onClick={this.startTimer}>
              <Icon name="resume" />
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;