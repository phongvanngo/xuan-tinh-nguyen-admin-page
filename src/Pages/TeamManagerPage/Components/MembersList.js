import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { closeMembersList } from './../../../Actions/TeamManagerAction';
import MemberItem from './MemberItem';

class MembersList extends Component {
	render() {
		var x;
		var showMemberItem =
			this.props.membersListCurrent !== []
				? this.props.membersListCurrent.map((member, index) => {
						for (x in this.props.teams) {
							if (this.props.teams[x]._id === member.team) {
								break;
							}
						}
						return (
							<MemberItem member={member} index={index + 1} key={index} team={this.props.teams[x].name} />
						);
					})
				: 'Không có thành viên';
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div class="card">
							<div className="card-header">
								{'Danh sách thành viên '}
								<span className="text-success">{this.props.teamNameCurrent}</span>

								<button onClick={this.props.exit} type="button" className="close" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<table class="table table-hover">
								<thead>
									<tr>
										<th style={{ width: '10%' }}>STT</th>
										<th style={{ width: '50%' }}>Tên</th>
										<th style={{ width: '30%' }}>Đội hình</th>
										<th style={{ width: '10%' }} />
									</tr>
								</thead>
								<tbody>{showMemberItem}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		membersListCurrent: state.membersListCurrent,
		teamNameCurrent: state.teamNameCurrent,
		members: state.members,
		teams: state.teams
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		exit: () => {
			dispatch(closeMembersList());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
