import * as Types from '../Constants/ActionTypes';
var initialState = false;

var isDisplayPostForm = (state = initialState, action) => {
  switch (action.type) {
    case Types.CLOSE_POST_FORM:
      return false;
    case Types.OPEN_POST_FORM:
      return true;
    default: return state;
  }
}

export default isDisplayPostForm;