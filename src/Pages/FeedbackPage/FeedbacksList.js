import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { openPostForm, fetchFeedbackRequest } from '../../Actions/Actions';
import FeedbackItem from './FeedbackItem';

class FeedbacksList extends Component {
	componentDidMount() {
		this.props.fetchAllFeedbacks();
	}

	render() {
		var showPostsList =
			this.props.feedbacks !== []
				? this.props.feedbacks.map((ele, index) => {
						return <FeedbackItem feedback={ele} key={index} index={index + 1} />;
					})
				: '';

		return (
			<Fragment>
				<div className="row" style={{ marginBottom: 20 }}>
					<div className="col-10" />
					<div className="col-xs-2">
						<button
							style={{ width: '150px' }}
							type="button"
							onClick={this.props.onOpenPostForm}
							className="btn btn-info "
						>
							Thêm bài viết
						</button>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card-header">Hộp thư góp ý</div>
							<table className="table table-hover">
								<thead>
									<tr>
										<th style={{ width: '5%' }}>STT</th>
										<th style={{ width: '20%' }}>Tên</th>
										<th style={{ width: '15%' }}>Thời gian</th>
										<th style={{ width: '55%' }}>Nội dung</th>
										<th style={{ width: '5%' }} />
									</tr>
								</thead>
								<tbody>{showPostsList}</tbody>
							</table>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		feedbacks: state.feedback
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onOpenPostForm: () => {
			dispatch(openPostForm());
		},
		fetchAllFeedbacks: () => {
			dispatch(fetchFeedbackRequest());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbacksList);
