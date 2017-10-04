import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from 'containers/Timer';

@connect((state) => state)

export default class Root extends Component {
  render() {
    const { loading, count, settings } = this.props;

    return (
      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <Timer
            settings={settings}
          />
        )}
      </div>
    );
  }
}