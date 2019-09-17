
// this is the root reducer. It is the store manager for all reducers

// to make a rootreducers:
//1. Get a method from reducx, called combine Reducers

import {combineReducers} from 'redux';

// 2. get each indivial reducer
import frozenReducer from './frozenReducers';
import produceReducer from './produceReducers';
import meatReducer from './meatReducers';


//3.call combinereducers and hand it an object
//each key in combineReducer will be a piece of state in the redux store
//each value, will be the value of that piece of state in the redux store

const rootreducer = combineReducers({
    frozen: frozenReducer,
    meat: meatReducer,
    produce: produceReducer

})


export default rootreducer;