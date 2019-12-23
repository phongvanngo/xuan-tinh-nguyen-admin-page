import * as Types from './../../Constants/ActionTypes';
var initialState = [];
var x;
var TeamManager = (state = initialState, action) => {
	switch (action.type) {
		case Types.FETCH_MEMBERS:
      state = action.members;
			return [ ...state ];
		case Types.ADD_MEMBER:
			var newMember = {
				_id: action.id,
				name: action.member.name,
				mssv: action.member.mssv,
				team: action.member.team,
				img: action.member.img
			};
			state.push(newMember);
			return [ ...state ];
		case Types.UPDATE_MEMBER:
			for (x in state) {
				if (state[x]._id === action.member.id) {
					state[x].name = action.member.name;
					state[x].mssv = action.member.mssv;
					state[x].team = action.member.team;
					state[x].img = action.member.img;
					break;
				}
			}
      return [ ...state ];
      case Types.DELETE_MEMBER:
        console.log('delete')
        for (x in state) {
          if (state[x]._id === action.id) {
            break;
          }
        }
        state.splice(x, 1);
        return [...state];

		default:
			return [ ...state ];
	}
};

export default TeamManager;
