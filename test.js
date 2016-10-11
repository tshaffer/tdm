import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import tdmReducer from './src/reducers/index';
import { newSign } from './src/actions/index';

let store = createStore(tdmReducer, applyMiddleware(thunk));
store.dispatch(newSign('TestSign', "1920x1080x60p"));

let state = store.getState();
console.log("state:");
console.log(state);
