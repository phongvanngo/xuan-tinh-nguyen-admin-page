import * as Types from '../Constants/ActionTypes';
var initialState = null

var isPostEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_POST:
      return action.post;

    case Types.SET_NULL:
      return null;

    default: return state;

  }
}

  export default isPostEditing;