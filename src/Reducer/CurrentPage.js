import * as types from '../Constants/ActionTypes';

var initialState = 'Quản lý sản phẩm';

const todoApp = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_PAGE:
           return action.pageName;

        default: return state;
    }
}

export default todoApp;