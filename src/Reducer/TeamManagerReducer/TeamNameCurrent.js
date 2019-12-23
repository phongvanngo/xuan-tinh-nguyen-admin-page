import * as Types from '../../Constants/ActionTypes';
var initialState = 'tất cả đội hình';
var x;
var TeamManager = (state = initialState, action) => {
	switch (action.type) {
		case Types.CHANGE_TEAM_NAME_CURRENT:
			return action.name;
		default:
			return state;
	}
};

export default TeamManager;
