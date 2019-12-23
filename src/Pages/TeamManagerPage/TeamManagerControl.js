import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	getMembersInTeam,
	openMembersList,
	openTeamsList,
	closeMembersList,
	closeTeamsList
} from './../../Actions/TeamManagerAction';

class TeamManager extends Component {

	render() {
    
		return (
			<Fragment>
				<div className="row">
					<div className="col-7" />
					<div className="col-5">
						<button
							style={{ marginRight: '10px' }}
							type="button"
							onClick={() => {
								this.props.onCloseMembersList();
								this.props.onOpenTeamsList();
							}}
							className="btn btn-info "
						>
							Danh sách đội hình
						</button>

						<button
							type="button"
							onClick={() => {
								this.props.onCloseTeamsList();
								this.props.onOpenMembersList(this.props.members);
							}}
							className="btn btn-info "
						>
							Danh sách thành viên
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		members:state.members
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onOpenTeamsList: () => {
			dispatch(openTeamsList());
		},
		onCloseTeamsList: () => {
			dispatch(closeTeamsList());
		},
		onCloseMembersList: () => {
			dispatch(closeMembersList());
		},
		onOpenMembersList: (members) => {
			dispatch(getMembersInTeam(null, 'tất cả đội hình',members));
			dispatch(openMembersList());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamManager);
