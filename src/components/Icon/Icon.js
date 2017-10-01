import React from 'react';
import PropTypes from 'prop-types';

import Icons from 'assets/icons';

const Icon = ({ name, size }) => {
  if (name) {
    return (
      <img width={size} height={size} src={Icons[`${name.toLowerCase()}`]} />
    );
  } else {
    return null;
  }
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  name: (props, propName, componentName) => {
    const iconTypes = Object.keys(Icons);

    if (!props[propName]) {
      throw new Error(`The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`undefined\``);
    }

    if (!iconTypes.includes(props[propName].toLowerCase())) {
      const arrayString = iconTypes.map((i) => `"${i}"`).join();
      throw new Error(`Invalid prop \`${propName}\` of value \`${props[propName].toLowerCase()}\` supplied to \`${componentName}\`, expected one of [${arrayString}]`);
    }
  }
};

Icon.defaultProps = {
  size: 16
};

export default Icon;