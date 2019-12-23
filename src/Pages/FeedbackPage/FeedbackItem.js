import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFeedbackRequest } from '../../Actions/Actions';

class FeedbackItem extends Component {

	render() {
		return (
			<tr>
				<td>
					<span className="badge badge-light">{this.props.index}</span>
				</td>
				<td>
					<span className="badge badge-light">{this.props.feedback.name}</span>
				</td>
				<td>
					<span className="badge badge-light">{this.props.feedback.date}</span>
					
				</td>
				<td>
					<span className="badge badge-light">{this.props.feedback.description}</span>
				</td>
				<td>
					{/* delete button------------------------ */}
					<button
						data-toggle="modal"
						data-target={'#' + this.props.feedback._id}
						className="btn btn-danger btn-sm"
					>
						<i className="fas fa-trash " />
					</button>
					{/* modalBox Alert --------------------------------------------------*/}
					<div
						className="modal fade"
						id={this.props.feedback._id}
						tabIndex="-1"
						role="dialog"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">
										Bạn có chắc chắn xóa 
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
										onClick={() => {
											this.props.onDeleteFeedback(this.props.feedback._id);
										}}
									>
										Đồng ý
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* modalBox Alert ------------------------------------------------------*/}
				</td>
			</tr>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onDeleteFeedback: (id) => {
			dispatch(deleteFeedbackRequest(id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackItem);
