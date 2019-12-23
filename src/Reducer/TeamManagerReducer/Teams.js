import * as Types from './../../Constants/ActionTypes';
var initialState = [];
var x;
var TeamManager = (state = initialState, action) => {
	switch (action.type) {
		case Types.FETCH_TEAMS:
			state = action.teams;
			return [ ...state ];
		case Types.ADD_TEAM:
			var newTeam = {
				_id: action.id,
				name: action.team.name
			};
			state.push(newTeam);
			return [ ...state ];
		case Types.DELETE_TEAM:
			for (x in state) {
				if (state[x]._id === action.id) {
					break;
				}
			}
			state.splice(x, 1);
			return [ ...state ];
		default:
			return [ ...state ];
	}
};

export default TeamManager;
