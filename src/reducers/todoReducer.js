import actions from '../actions/types';

const initialState = {
    
};

export default (state = initialState,action) => {
    
    switch(action.type){
    case actions.GET_TODO_BY_ID:
      
        return action.payload ;
    default: return state;
    }
   
};