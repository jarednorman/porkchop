import { handleActions } from 'redux-actions';

const defaultState = {
  poo: 'butts'
};

module.exports = handleActions({
  REFRESH_ONGOING_MATCH: (state, action) => {
    return state;
  }
}, defaultState);
