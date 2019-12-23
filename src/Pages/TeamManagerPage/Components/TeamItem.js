import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	closeTeamsList,
	deleteTeamRequest,
	openMembersList,
	getMembersInTeam
} from './../../../Actions/TeamManagerAction';
class TeamItem extends Component {

  
	render() {
		return (
			<Fragment>
				<tr>
					<td> {this.props.index}</td>
					<td> {this.props.team.name}</td>
					<td>
						<button
							onClick={this.props.onOpenMembersList}
							style={{ marginRight: 5 }}
							className="btn btn-warning btn-sm"
						>
							<i class="fas fa-info-circle" />
						</button>
						{/* delete button------------------------ */}
						<button
							data-toggle="modal"
							data-target={'#delete' + this.props.team._id}
							className="btn btn-danger btn-sm"
						>
							<i className="fas fa-trash " />
						</button>
					</td>
				</tr>

				{/* modalBox Alert Delete--------------------------------------------------*/}
				<div
					className="modal fade"
					id={'delete' + this.props.team._id}
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Bạn có chắc chắn xóa đội hình
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-primary"
									data-dismiss="modal"
									onClick={this.props.onDeleteTeam}
								>
									Đồng ý
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* modalBox Alert ------------------------------------------------------*/}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		exit: () => {
			dispatch(closeTeamsList());
		},
		onDeleteTeam: () => {
			dispatch(deleteTeamRequest(props.team._id));
		},
		onOpenMembersList: () => {
			dispatch(getMembersInTeam(props.team._id, 'đội hình ' + props.team.name, null));
			dispatch(openMembersList());
		},
		onGetMemberInTeam: () => {
			dispatch(getMembersInTeam(props.team._id, 'đội hình ' + props.team.name, null));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamItem);
