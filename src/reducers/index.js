import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import todosReducer from './todosReducer'
;
import todoReducer from './todoReducer';

export default combineReducers({
    users : usersReducer,
    todos : todosReducer,
    todo: todoReducer
});