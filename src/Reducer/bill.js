import * as Types from '../Constants/ActionTypes'
var initialState = [];

var posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_BILL_DATA:
      state = action.bill;  
      return [...state]
    default: return [...state];
  }
}

export default posts;