import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	openPostForm,
	fetchBillDataRequest,
	actFetchProductsRequest,
	deleteBillRequest
} from './../../Actions/Actions';

class BillItem extends Component {
	render() {
		var showBoughtProucts = this.props.bill.cart.map((cart, index) => {
			var x;
			if (this.props.prouducts === null) return '';
			for (x in this.props.products) {
				if (this.props.products[x]._id === cart._id) {
					console.log(this.props.products[x]._id, ' ', cart._id);
					return (
						<tr>
							<td>{index + 1}</td>
							<td>{this.props.products[x].tensp}</td>
							<td>{cart.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
							<td>{cart.quantity}</td>
							<td>{(cart.cost * cart.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
						</tr>
					);
				}
			}
		});
		return (
			<Fragment>
				<tr>
					<td>{this.props.index}</td>
					<td>
						<span className="badge badge-light">{this.props.bill.customerInfo.name}</span>
					</td>
					<td>
						<span className="badge badge-light">{this.props.bill.createdAt}</span>
					</td>
					<td>
						<span className="badge badge-light">{this.props.bill.customerInfo.address}</span>
					</td>
					<td>
						<span className="badge badge-light">
							{this.props.bill.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
						</span>
					</td>
					<td
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						{this.props.bill.status === 'unverified' ? (
							<span className="badge badge-danger">
								<i className="fas fa-times" />
							</span>
						) : (
							<span className="badge badge-success">
								<i className="fas fa-check" />
							</span>
						)}
					</td>
					<td>
						<button
							style={{ marginRight: 5 }}
							type="button"
							className="btn btn-warning btn-sm"
							data-toggle="modal"
							data-target={'#' + this.props.bill._id}
						>
							<i class="fas fa-info-circle" />
						</button>
						<button
							type="button"
							className="btn btn-danger btn-sm"
							data-target={'#delete' + this.props.bill._id}
							data-toggle="modal"
						>
							<i className="fas fa-trash" />
						</button>
					</td>
				</tr>

				{/* modal box */}
				<div
					className="modal fade bd-example-modal-lg"
					id={this.props.bill._id}
					tabIndex={-1}
					role="dialog"
					aria-labelledby={this.props.bill._id}
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h6 className="modal-title" id="exampleModalLongTitle">
									Chi tiết hóa đơn
								</h6>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>

							{/* customer info */}
							<div className="container-fluid">
								<div class="card-body">
									{/* ten khach hang */}
									<div className="row">
										<div className="col-12">
											<span>Tên khách hàng: </span>
											<span className="badge badge-light">
												{this.props.bill.customerInfo.name}
											</span>
										</div>
									</div>
									{/* university */}
									<div className="row">
										<div className="col-12">
											<span>Trường: </span>
											<span className="badge badge-light">
												{this.props.bill.customerInfo.university}
											</span>
										</div>
									</div>
									{/*sdt*/}
									<div className="row">
										<div className="col-12">
											<span>Số điện thoại: </span>
											<span className="badge badge-light">
												{this.props.bill.customerInfo.phone}
											</span>
										</div>
									</div>
									{/*email*/}
									<div className="row">
										<div className="col-12">
											<span>Email: </span>
											<span className="badge badge-light">
												{this.props.bill.customerInfo.email}
											</span>
										</div>
									</div>
									{/*Địa chỉ*/}
									<div className="row">
										<div className="col-12">
											<span>Địa chỉ: </span>
											<span className="badge badge-light">
												{this.props.bill.customerInfo.address}
											</span>
										</div>
									</div>
									<hr />
									{/*ngay mua hang*/}
									<div className="row">
										<div className="col-12">
											<span>Ngày mua hàng: </span>
											<span className="badge badge-light">{this.props.bill.createdAt}</span>
										</div>
									</div>
									{/*tình trang don hang*/}
									<div className="row">
										<div className="col-12">
											<span>Tình trạng đơn hàng: </span>
											<span
												className={
													this.props.bill.status === 'unverified' ? (
														'badge badge-danger'
													) : (
														'badge badge-success'
													)
												}
											>
												{this.props.bill.status === 'unverified' ? (
													'chưa xác nhận mua hàng'
												) : (
													'đã xác nhận mua hàng'
												)}
											</span>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<table>
												<thead>
													{/* chi tiet san pham da mua */}
													<tr>
														<th style={{ width: '5%' }}>STT</th>
														<th style={{ width: '35%' }}>Tên sản phẩm</th>
														<th style={{ width: '20%' }}>Giá</th>
														<th style={{ width: '20%' }}>Số lượng </th>
														<th style={{ width: '20%' }}>Thành tiền</th>
													</tr>
												</thead>
												<tbody>
													{showBoughtProucts}
													<tr>
														<td style={{ width: '5%' }} />
														<td style={{ width: '35%' }} />
														<td style={{ width: '20%' }} />
														<td style={{ width: '20%' }}>Phí giao hàng: </td>
														<td style={{ width: '20%' }}>
															<h5>
																<span className="badge badge-light">
																	{this.props.bill.shippingCost
																		.toString()
																		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
																</span>
															</h5>
														</td>
													</tr>
													<tr>
														<td style={{ width: '5%' }} />
														<td style={{ width: '35%' }} />
														<td style={{ width: '20%' }} />
														<td style={{ width: '20%' }}>Tổng cộng </td>
														<td style={{ width: '20%' }}>
															<h5>
																<span className="badge badge-warning">
																	{this.props.bill.totalCost
																		.toString()
																		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
																</span>
															</h5>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* modalBox Alert --------------------------------------------------*/}
				<div
					className="modal fade"
					id={'delete' + this.props.bill._id}
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Bạn có chắc chắn xóa bài viết
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
									onClick={this.props.onDeleteBill}
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
		},
		onDeleteBill: () => {
			dispatch(deleteBillRequest(props.bill._id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BillItem);
