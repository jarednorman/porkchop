import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

const defaultState = Map({
  match: null,
  fetching: false
});

module.exports = handleActions({
  ONGOING_MATCH_REFRESH_START: (state, _action) => {
    return state.set('fetching', true);
  },
  ONGOING_MATCH_REFRESH_END: (state, _action) => {
    return state.set('fetching', false);
  },
  ONGOING_MATCH_UPDATE: (state, { payload: match }) => {
    return state.set('match', Map(match));
  }
}, defaultState);
