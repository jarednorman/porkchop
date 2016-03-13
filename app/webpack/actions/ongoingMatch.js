import { createAction } from 'redux-actions';

const startRefreshingOngoingMatch = createAction('ONGOING_MATCH_REFRESH_START');
const finishRefreshingOngoingMatch = createAction('ONGOING_MATCH_REFRESH_END');
const updateOngoingMatch = createAction('ONGOING_MATCH_UPDATE');

const refresh = () => {
  return (dispatch, getState) => {
    const { ongoingMatch: state } = getState();
    const fetching = state.get('fetching');

    if (fetching) { return; }

    dispatch(startRefreshingOngoingMatch());

    fetch('/api/ongoing_match.json')
      .then((response) => {
        return response.status == 200 ? response.json() : (new Promise).reject();
      })
      .then((json) => {
        dispatch(finishRefreshingOngoingMatch());
        dispatch(updateOngoingMatch(json.match));
      });
  };
};

module.exports = {
  refresh
};
