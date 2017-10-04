import React, { Component } from 'react';

import Controls from 'components/Controls';
import Countdown from 'components/Countdown';

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

  tick = () => {
    if (this.state.currentTime !== 0) {
      this.setState(({ currentTime }) => ({ currentTime: currentTime - 1 }));
    } else {
      // this.swapTimer();
    }
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

  render() {
    const { active, paused, currentTime } = this.state;

    return (
      <div>
        <div>
          <Countdown
            currentTime={currentTime}
          />
        </div>

        <div>
          <Controls
            active={active}
            paused={paused}
            stopTimer={this.stopTimer}
            startTimer={this.startTimer}
            pauseTimer={this.pauseTimer}
          />
        </div>
      </div>
    );
  }
}

export default Timer;