import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	openPostForm,
	fetchBillDataRequest,
	actFetchProductsRequest,
	editProductRequest,
	delProductRequest
} from '../../Actions/Actions';
import BillItem from './BillItem';

class BillList extends Component {
	componentDidMount() {
		this.props.onGetProducts();
	}

	render() {
		var showBillslist = this.props.bills.map((bill, index) => {
			return <BillItem key={index} index={index + 1} bill={bill} />;
		});

		return (
			<Fragment>
				<div className="row">
					<div className="col-12">
						<div class="card">
							<div className="card-header">Danh sách đơn hàng</div>
							<table class="table table-hover">
								<thead>
									<tr>
										<th style={{ width: '4%' }} className="text-center">
											STT
										</th>
										<th style={{ width: '17%' }}>Tên khách hàng</th>
										<th style={{ width: '15%' }}>Ngày đặt hàng</th>
										<th className="text-wrap" style={{ width: '25%' }}>
											Địa chỉ
										</th>
										<th className="text-wrap" style={{ width: '10%' }}>
											Số tiền
										</th>
										<th style={{ width: '9%' }}>Xác nhận</th>
										<th style={{ width: '5%' }} />
									</tr>
								</thead>
								<tbody>{showBillslist}</tbody>
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
		bills: state.bill,
		products: state.products
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onOpenPostForm: () => {
			dispatch(openPostForm());
		},
		fetchAllBillData: () => {
			dispatch(fetchBillDataRequest());
		},
		onGetProducts: () => {
			dispatch(actFetchProductsRequest());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BillList);
