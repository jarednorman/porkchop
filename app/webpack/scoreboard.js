import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/ScoreboardApp';
import store from './store';

import refreshOngoingMatch from './actions/refreshOngoingMatch';
setInterval(() => store.dispatch(refreshOngoingMatch()), 333);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('scoreboard')
)
