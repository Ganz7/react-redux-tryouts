import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const todoAppReducer = combineReducers({
    todos: todoReducer
});

export default todoAppReducer;
