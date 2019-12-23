import * as Types from '../Constants/ActionTypes'
var initialState = [];
var x;
var feedback = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_FEEDBACK:
      state = action.feedbacks;
      return [...state]
    
    case Types.DELETE_FEEDBACK:
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


export default feedback;