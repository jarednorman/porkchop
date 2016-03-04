import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

module.exports = applyMiddleware(thunk)(createStore)(reducer)
