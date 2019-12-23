import * as Types from '../../Constants/ActionTypes'
var initialState = false
var x;
var TeamManager = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_MEMBER_FORM:
      return true;
    case Types.CLOSE_MEMBER_FORM:
      return false;
    default: return state;
  }
}

export default TeamManager;