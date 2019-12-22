import * as Types from '../Constants/ActionTypes'
var initialState = [];
var x;
var posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_BILL_DATA:
      state = action.bill;  
      return [...state]
    case Types.DELETE_BILL:
      for (x in state) {
        if (state[x]._id === action.id) {
          break;
        }
      }
      state.splice(x, 1);
      return [...state];  
    default: return [...state];
  }
}

export default posts;