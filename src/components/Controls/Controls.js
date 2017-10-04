import React from 'react';

import Icon from 'components/Icon';

const Controls = ({ active, paused, stopTimer, startTimer, pauseTimer }) => {
  return (
    <div>
      <button disabled={active} onClick={startTimer}>
        <Icon name="play" />
      </button>

      <button disabled={!active} onClick={stopTimer}>
        <Icon name="stop" />
      </button>

      {paused === false ? (
        <button disabled={!active} onClick={pauseTimer}>
          <Icon name="pause" />
        </button>
      ) : (
        <button onClick={startTimer}>
          <Icon name="resume" />
        </button>
      )}
    </div>
  );
};

export default Controls;