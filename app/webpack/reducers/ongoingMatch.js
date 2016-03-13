import { handleActions } from 'redux-actions';

const defaultState = {
  match: null,
  fetching: false
};

module.exports = handleActions({
  ONGOING_MATCH_REFRESH_START: (state, _action) => {
    state.fetching = true;
    return state;
  },
  ONGOING_MATCH_REFRESH_END: (state, _action) => {
    state.fetching = false;
    return state;
  },
  ONGOING_MATCH_UPDATE: (state, { payload: match }) => {
    state.match = match;
    return state;
  }
}, defaultState);
