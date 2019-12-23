import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	deleteMemberRequest,
	editMember,
	openMemberForm,

} from './../../../Actions/TeamManagerAction';
class MemberItem extends Component {
	render() {
		return (
			<Fragment>
				<tr>
					<td>{this.props.index}</td>
					<td>{this.props.member.name}</td>
					<td>{this.props.team}</td>
					<td>
						{/* edit button------------------------ */}
						<button
							style={{ marginRight: 5 }}
							onClick={this.props.onEditMember}
							className="btn btn-warning btn-sm"
						>
							<i className="fas fa-pen" />
						</button>
						{/* delete button------------------------ */}
						<button
							data-toggle="modal"
							data-target={'#deletemember' + this.props.member._id}
							className="btn btn-danger btn-sm"
						>
							<i className="fas fa-trash " />
						</button>
					</td>
				</tr>
				{/* modalBox Alert delete member--------------------------------------------------*/}
				<div
					className="modal fade"
					id={'deletemember' + this.props.member._id}
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Bạn có chắc chắn xóa thành viên này
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
									onClick={this.props.onDeleteMember}
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
		onDeleteMember: () => {
			dispatch(deleteMemberRequest(props.member._id));
		},
		onEditMember: () => {
			dispatch(editMember(props.member));
			dispatch(openMemberForm());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberItem);
