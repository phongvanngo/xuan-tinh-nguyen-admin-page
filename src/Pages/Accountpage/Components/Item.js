import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class Item extends Component {
	onShowPermis = (boo) => {
		if (boo)
			return (
				<span className="badge badge-success">
					<i className="fas fa-check" />
				</span>
			);
		else
			return (
				<span className="badge badge-danger">
					<i className="fas fa-times" />
				</span>
			);
	};

	render() {
		const user = this.props;
		return (
			<tr>
				<td className="text-center">{user.stt + 1}</td>
				<td>
					<span className="badge badge-light"> {user.username}</span>
				</td>
				<td>{this.onShowPermis(user.productPermis)}</td>
				<td>{this.onShowPermis(user.billPermis)}</td>
				<td>{this.onShowPermis(user.teamPermis)}</td>
				<td>{this.onShowPermis(user.userPermis)}</td>
				<td>{this.onShowPermis(user.postPermis)}</td>
				<td>{this.onShowPermis(user.feedbackPermis)}</td>
				<td>
					<button
						style={{ marginLeft: '5px' }}
						onClick={() => {
							if (window.confirm('Bạn có muốn xóa sản phẩm này?')) user.onDelUser(user);
						}}
						type="button"
						className="btn btn-danger btn-sm"
					>
						<i className="fas fa-trash " />
					</button>
				</td>
			</tr>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDelUser: (product) => {
			dispatch(actions.delUserRequest(product));
		}
	};
};

export default connect(null, mapDispatchToProps)(Item);
