import { handleActions } from 'redux-actions'
import { sortBy } from 'lodash'

import {
  setTableId,
  startMatchSetup,
  finishMatchSetup,
  setActivePlayers,
  setTrackingInterval
} from '../actions/table'

const updateActivePlayers = (state, { payload: activePlayers }) => {
  const sortedActivePlayers = sortBy(activePlayers, ({ name }) => name)
  return { ...state, activePlayers: sortedActivePlayers }
}

export default handleActions({
  [setTableId]: (state, { payload: tableId }) => ({ ...state, isMatchmaking: false, id: tableId }),
  [startMatchSetup]: (state, action) => ({ ...state, isMatchmaking: true }),
  [finishMatchSetup]: (state, action) => ({ ...state, isMatchmaking: false }),
  [setActivePlayers]: updateActivePlayers,
  [setTrackingInterval]: (state, { payload: trackingInterval }) => ({ ...state, trackingInterval })
}, {
  id: null,
  isMatchmaking: false,
  activePlayers: [],
  trackingInterval: null
})
