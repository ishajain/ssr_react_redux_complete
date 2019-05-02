import axios from 'axios';
import actions from './types';

// eslint-disable-next-line import/prefer-default-export
export const getUserData = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const responseData = response.data.map(data => ({ id:data.id, name : data.name , email : data.email, city: data.address.city ,website: data.website}));
  
    dispatch({
        type: actions.GET_USER_DATA,
        payload : responseData
    });
};