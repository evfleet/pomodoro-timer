/* eslint-disable indent */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducer from 'reducers';
import Root from 'containers/Root';

const store = createStore(reducer, compose(
  autoRehydrate(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

persistStore(store);

render(
  <Provider store={ store }>
    <Root />
  </Provider>
, document.getElementById('root'));