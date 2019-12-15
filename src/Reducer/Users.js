import * as types from './../Constants/ActionTypes';
import { remove } from 'lodash';

var initialState = [];

var todoApp = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_USER:
            state.push({
              username: action.user.username,
              password: action.user.password,
              productPermis: action.user.productPermis,
              billPermis: action.user.billPermis,
              userPermis: action.user.userPermis,
              postPermis: action.user.postPermis,
              teamPermis: action.user.teamPermis,
              feedbackPermis: action.user.feedbackPermis
            });
            return [...state];   
        case types.DEL_USER:
                  remove(state, (user) =>{
                    return user._id === action.user._id;
                  });
                  return [...state]; 
        case types.GET_USER:
            state = [...action.users];
            return [...state];
        default: return [...state];        
    }
}

export default todoApp;