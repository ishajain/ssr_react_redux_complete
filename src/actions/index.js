import axios from 'axios';
import actions from './types';

export const getUserData = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const responseData = response.data.map(data => ({ id:data.id, name : data.name , email : data.email, city: data.address.city ,website: data.website}));
  
    dispatch({
        type: actions.GET_USER_DATA,
        payload : responseData
    });
};

export const getAllTodos = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const responseData = response.data.map(data => ({ id:data.id, userId : data.userId , title:data.title}));
  
    dispatch({
        type: actions.GET_ALL_TODOS,
        payload : responseData
    });
};

export const getTodoById = id => async dispatch => {
    console.log(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const responseData = response.data;
  
    dispatch({
        type: actions.GET_TODO_BY_ID,
        payload : responseData
    });
};