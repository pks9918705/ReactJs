
//in redux application there is mainly 1 store for entire application
// const redux = require("redux");
import { createStore } from 'redux';
import { todoReducer } from './reducers/todoReducers';

export const store = createStore(todoReducer);
