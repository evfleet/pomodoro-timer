import React, { Component } from 'react';

import Icon from 'components/Icon';

const initialState = {
  active: false,
  paused: false,
  currentTime: 0
};

export default class Timer extends Component {
  state = initialState

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState(({ currentTime }) => ({ currentTime: currentTime + 1 }));
  }

  stopTimer = () => {
    this.setState(initialState, () => {
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

  render() {
    const { active, paused, currentTime } = this.state;

    return (
      <div>
        <button disabled={active} onClick={this.startTimer}>
          <Icon name="play" />
          Start
        </button>

        <button onClick={this.stopTimer}>
          Stop
        </button>

        {paused === false ? (
          <button disabled={!active} onClick={this.pauseTimer}>
            Pause
          </button>
        ) : (
          <button onClick={this.startTimer}>
            Resume
          </button>
        )}
      </div>
    );
  }
}