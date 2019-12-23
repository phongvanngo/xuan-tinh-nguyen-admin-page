import * as Types from './../../Constants/ActionTypes'
var initialState = false;
var x;
var TeamManager = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_TEAMS_LIST:
      return true;
    case Types.CLOSE_TEAMS_LIST:
      return false;
    default: return state; 
  }
}

export default TeamManager;