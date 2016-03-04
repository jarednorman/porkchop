import { handleActions } from 'redux-actions';

const defaultState = {
  poo: 'butts'
};

module.exports = handleActions({
  TEST: (state, action) => {
    console.log(state);
    return state;
  }
}, defaultState);
