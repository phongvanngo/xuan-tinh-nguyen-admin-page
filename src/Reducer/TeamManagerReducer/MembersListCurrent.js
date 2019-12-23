import * as Types from '../../Constants/ActionTypes';
var initialState = null;
var x;
var TeamManager = (state = initialState, action) => {
	switch (action.type) {
		case Types.ADD_MEMBERS_CURRENT:
			state = action.members;
			return [ ...state ];
		case Types.REMOVE_MEMBERS_CURRENT:
			return null;
		case Types.DELETE_MEMBER:
			console.log('delete');
			for (x in state) {
				if (state[x]._id === action.id) {
					break;
				}
			}
			state.splice(x, 1);
			return [ ...state ];
		default:
			return state;
	}
};

export default TeamManager;
