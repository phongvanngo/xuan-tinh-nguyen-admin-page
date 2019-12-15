import * as types from './../Constants/ActionTypes';

var initialState = {};

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN_USER:
            state = action.user;
           return state;
        default: return state;
    }
}

export default myReducer;