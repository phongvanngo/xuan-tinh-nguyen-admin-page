import * as types from './../Constants/ActionTypes';

var initialState = false;

const todoApp = (state = initialState, action) => {
    switch(action.type){
        case types.IS_AUTHENTICATED:
            state = true;
           return true;
        case types.LOGOUT_USER:
            state = false;
            localStorage.removeItem("accessToken");
            localStorage.removeItem("authenticated");
            localStorage.removeItem("menus");
            localStorage.removeItem("username");
            return false;
        default: return state;
    }
}

export default todoApp;