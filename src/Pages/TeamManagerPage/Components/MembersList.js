import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { closeMembersList, setNullMemberForm, openMemberForm } from './../../../Actions/TeamManagerAction';
import MemberItem from './MemberItem';
import MemberForm from './MemberForm';

class MembersList extends Component {
	componentDidMount() {
		window.scroll(0, 0);
	}

	componentWillReceiveProps = () => {
		this.setState({});
	};
	render() {
		var x;
		var showMemberItem =
			this.props.membersListCurrent !== null
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

		if (this.props.isMemberFormViewing) {
			return <MemberForm />;
		} else {
			return (
				<div className="container-fluid">
					<div className="row" style={{ marginBottom: 20 }}>
						<div className="col-10" />
						<div className="col-xs-2">
							<button
								style={{ width: '150px' }}
								onClick={this.props.onAddMember}
								type="button"
								className="btn btn-info"
							>
								Thêm thành viên
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div class="card">
								<div className="card-header">
									{'Danh sách thành viên '}
									<span className="text-success">{this.props.teamNameCurrent}</span>

									<button
										onClick={this.props.exit}
										type="button"
										className="close"
										aria-label="Close"
									>
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
}

const mapStateToProps = (state) => {
	return {
		membersListCurrent: state.membersListCurrent,
		teamNameCurrent: state.teamNameCurrent,
		members: state.members,
		teams: state.teams,
		isMemberFormViewing: state.isMemberFormViewing
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		exit: () => {
			dispatch(closeMembersList());
		},
		onAddMember: () => {
			dispatch(setNullMemberForm());
			dispatch(openMemberForm());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
