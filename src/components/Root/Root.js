import React, { Component } from 'react';

import Timer from 'components/Timer';

export default class Root extends Component {
  state = {
    test: true
  }

  render() {
    console.log(this.state);

    return (
      <div>
        Root

        <Timer />
      </div>
    );
  }
}