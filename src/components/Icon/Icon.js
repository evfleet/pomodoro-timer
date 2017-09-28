import React from 'react';
import PropTypes from 'prop-types';

import Icons from 'assets/icons';

const Icon = ({ name }) => {
  if (name) {
    return (
      <img src={Icons[`${name.toLowerCase()}`]} />
    );
  } else {
    return null;
  }
};

Icon.propTypes = {
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

export default Icon;