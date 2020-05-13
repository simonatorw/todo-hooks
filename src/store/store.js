import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import toDoState from '../components/ToDo/state/toDoReducer';

const middleware = [thunk];
const rootReducer = combineReducers({
  toDoState
});

export default createStore(rootReducer, applyMiddleware(...middleware));