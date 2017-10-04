import React from 'react';

import formatTime from 'utils/formatTime';

const Countdown = ({ currentTime }) => {
  const seconds = formatTime(currentTime % 60);
  const minutes = formatTime(currentTime / 60);

  return (
    <div>
      <p>{`${minutes}:${seconds}`}</p>
    </div>
  );
};

export default Countdown;