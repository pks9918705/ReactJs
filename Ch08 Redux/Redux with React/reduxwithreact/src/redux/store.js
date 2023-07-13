
//in redux application there is mainly 1 store for entire application
// const redux = require("redux");
import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducers/todoReducers';
import { noteReducer } from './reducers/noteReducers';

const result=combineReducers({
    // todos:todoReducer,
    // notes:noteReducer
     todoReducer,
     noteReducer
})
export const store  = createStore(result);

