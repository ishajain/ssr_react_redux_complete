import actions from '../actions/types';

const initialState = {
    isLoading : true,
    lists : []
};

export default (state = initialState,action) => {
    
    switch(action.type){
    case actions.GET_ALL_TODOS:
      
        return {...state,lists: action.payload, isLoading: false };
    default: return state;
    }
   
};