import * as Types from './../../Constants/ActionTypes'
var initialState = null

var isPostEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_MEMBER:
      return action.member;

    case Types.SET_EDIT_MEMBER_NULL:
      return null;
    default: return state;

  }
}

  export default isPostEditing;