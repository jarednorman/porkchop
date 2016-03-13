import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/ScoreboardApp';
import store from './store';

import { refresh } from './actions/ongoingMatch';

setInterval(() => store.dispatch(refresh()), 1500);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('scoreboard')
)
