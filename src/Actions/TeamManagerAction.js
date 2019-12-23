import * as Types from './../Constants/ActionTypes';
import api from '../service/api';

export const openTeamsList = () => {
	return {
		type: Types.OPEN_TEAMS_LIST
	};
};

export const closeTeamsList = () => {
	return {
		type: Types.CLOSE_TEAMS_LIST
	};
};
export const openMembersList = () => {
	return {
		type: Types.OPEN_MEMBERS_LIST
	};
};
export const closeMembersList = () => {
	return {
		type: Types.CLOSE_MEMBERS_LIST
	};
};
export const openMemberForm = () => {
	return {
		type: Types.OPEN_MEMBER_FORM
	};
};
export const closeMemberForm = () => {
	return {
		type: Types.CLOSE_MEMBER_FORM
	};
};

export const fetchMembersDataRequest = () => {
	return (dispatch) => {
		return api
			.get('member')
			.then((res) => {
				dispatch(fetchMembers(res.data.members));
			})
			.catch((error) => {
				console.log(error);
				alert('lỗi kết nối');
			});
	};
};
export const fetchMembers = (members) => {
	return {
		type: Types.FETCH_MEMBERS,
		members
	};
};
export const fetchTeamsDataRequest = () => {
	return (dispatch) => {
		return api
			.get('team')
			.then((res) => {
				dispatch(fetchTeams(res.data.teams));
			})
			.catch((error) => {
				console.log(error);
				alert('lỗi kết nối');
			});
	};
};
export const fetchTeams = (teams) => {
	return {
		type: Types.FETCH_TEAMS,
		teams
	};
};

export const addMember = (member, id) => {
	return {
		type: Types.ADD_MEMBER,
		member,
		id
	};
};

export const addMemberRequest = (member) => {
	return (dispatch) => {
		return api
			.post('member', member)
			.then((res) => {
				dispatch(addMember(member, res.data.info._id));
			})
			.catch((error) => {
				console.log(error);
				alert('lỗi kết nối');
			});
	};
};

export const addTeam = (team, id) => {
	return {
		type: Types.ADD_TEAM,
		team,
		id
	};
};

export const addTeamRequest = (team) => {
	return (dispatch) => {
		return api
			.post('team', team)
			.then((res) => {
				dispatch(addTeam(team, res.data.info._id));
			})
			.catch((error) => {
				console.log(error);
				alert('lỗi kết nối');
			});
	};
};

export const updateMember = (member) => {
	return {
		type: Types.UPDATE_MEMBER,
		member
	};
};

export const updateMemberRequest = (member) => {
	var memberChange = [
		{
			prop: 'name',
			value: member.name
		},
		{
			prop: 'mssv',
			value: member.mssv
		},
		{
			prop: 'team',
			value: member.team
		},
		{
			prop: 'img',
			value: member.img
		}
	];
	return (dispatch) => {
		return api
			.patch(`member/${member.id}`, memberChange)
			.then((res) => {
				dispatch(updateMember(member));
			})
			.catch((error) => {
				console.log(error);
				alert('lỗi kết nối');
			});
	};
};

export const deleteMemberRequest = (id) => {
	return (dispatch) => {
		return api
			.delete(`member/${id}`)
			.then((res) => {
				dispatch(deleteMember(id));
			})
			.catch((error) => {
				console.log(error);
				alert('lỗi kết nối');
			});
	};
};

export const deleteMember = (id) => {
	return {
		type: Types.DELETE_MEMBER,
		id
	};
};

export const deleteTeamRequest = (id) => {
	return (dispatch) => {
		return api
			.delete(`team/${id}`)
			.then((res) => {
				dispatch(deleteTeam(id));
			})
			.catch((error) => {
				console.log(error);
				alert('lỗi kết nối');
			});
	};
};

export const deleteTeam = (id) => {
	return {
		type: Types.DELETE_TEAM,
		id
	};
};

export const addMembersListCurrent = (members) => {
	return {
		type: Types.ADD_MEMBERS_CURRENT,
		members
	};
};
export const removeMembersListCurrent = (members) => {
	return {
		type: Types.REMOVE_MEMBERS_CURRENT
	};
};

export const changeTeamNameCurrent = (name) => {
	return {
		type: Types.CHANGE_TEAM_NAME_CURRENT,
		name
	};
};

export const getMembersInTeam = (id, name, members) => {
	return (dispatch) => {
		if (id === null) {
			dispatch(addMembersListCurrent(members));
			dispatch(changeTeamNameCurrent(name));
		} else {
			return api
				.get(`member/${id}`)
				.then((res) => {
					dispatch(addMembersListCurrent(res.data.members));
					dispatch(changeTeamNameCurrent(name));
				})
				.catch((error) => {
					console.log(error);
					alert('lỗi kết nối');
				});
		}
	};
};

export const editMember = (member) => {
	return {
		type: Types.EDIT_MEMBER,
		member
	};
};
export const setNullMemberForm = () => {
	return {
		type: Types.SET_EDIT_MEMBER_NULL
	};
};
