import * as types from './../Constants/ActionTypes';

var initialState = {
    _id: '',
    ten: '',
    mota: '',
    gia: '',
    nsx: '',
    hsd: '',
    img:''
};

var todoApp = (state = initialState, action) => {
    switch(action.type){
        case types.IS_SELECTED:
                state = action.product;
            return action.product;
        default: return state;        
    }
}

export default todoApp;