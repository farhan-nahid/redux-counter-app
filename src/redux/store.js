import { combineReducers, createStore } from 'redux';
import { countReducer } from './reducers/countReducers';

const allReducers = combineReducers({ count: countReducer });

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
