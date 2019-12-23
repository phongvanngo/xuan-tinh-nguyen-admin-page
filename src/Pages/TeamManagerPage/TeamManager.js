import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchMembersDataRequest, fetchTeamsDataRequest } from './../../Actions/TeamManagerAction';
import TeamsList from './Components/TeamsList';
import MembersList from './Components/MembersList';
import TeamManagerControl from './TeamManagerControl';

class TeamManager extends Component {
	componentDidMount() {
		this.props.fetchAllMember();
		this.props.fetchAllTeam();
	}

	render() {
		return (
			<div className="container-fluid">
				{this.props.isMembersListViewing ? (
					<MembersList />
				) : this.props.isTeamsListViewing ? (
					<TeamsList />
				) : (
					<TeamManagerControl />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isMembersListViewing: state.isMembersListViewing,
		isTeamsListViewing: state.isTeamsListViewing,
		members: state.members
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchAllMember: () => {
			dispatch(fetchMembersDataRequest());
		},
		fetchAllTeam: () => {
			dispatch(fetchTeamsDataRequest());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamManager);
