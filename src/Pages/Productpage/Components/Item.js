import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class Item extends Component {
	onEditProduct = (product) => {
		this.props.onSelectProduct(product);
		this.props.onShowForm();
	};

	render() {
		const item = this.props;
		return (
			<tr>
				<td className="text-center">
					<span className="badge badge-light">{item.stt + 1}</span>
				</td>
				<td>
					<span className="badge badge-light">{item.tensp}</span>
				</td>
				<td>
					<span className="badge badge-light">{item.mota}</span>
				</td>
				<td>
					<span className="badge badge-light">
						{item.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
					</span>
				</td>
				<td>
					<span className="badge badge-light">{item.ngaysx}</span>
				</td>
				<td>
					<span className="badge badge-light">{item.hansd}</span>
				</td>
				<td>
					<button onClick={() => this.onEditProduct(item)} type="button" className="btn btn-warning btn-sm">
						<i className="fas fa-pen" />
					</button>
					<button
						style={{ marginLeft: '5px' }}
						onClick={() => {
							if (window.confirm('Bạn có muốn xóa sản phẩm này?')) item.onDelProduct(item);
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
		onDelProduct: (product) => {
			dispatch(actions.delProductRequest(product));
		},
		onSelectProduct: (product) => {
			dispatch(actions.isSelected(product));
		},
		onShowForm: () => {
			dispatch(actions.showForm());
		}
	};
};

export default connect(null, mapDispatchToProps)(Item);
