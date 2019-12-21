import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { openPostForm, fetchBillDataRequest } from './../../Actions/Actions';
import api from './../../service/api';

class BillItem extends Component {
	render() {
		var products = this.props.products;
		console.log(products);
		var showBoughtProucts = this.props.bill.cart.map((cart, index) => {
			var x;
			for (x in this.props.products) {
				if (this.props.products[x]._id === cart._id) {
					break;
				}
			}
			return (
				<tr>
					<td>{index + 1}</td>
					<td>{this.props.products[x].tensp}</td>
					<td>{this.props.products[x].gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
					<td>{cart.quantity}</td>
					<td>
						{(this.props.products[x].gia * cart.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
					</td>
				</tr>
			);
		});
		return (
			<Fragment>
				<tr>
					<td>{this.props.index}</td>
					<td>{this.props.bill.customerInfo.name}</td>
					<td>{this.props.bill.createdAt}</td>
					<td>{this.props.bill.customerInfo.address}</td>
					<td>{this.props.bill.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
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
							type="button"
							className="btn btn-info btn-sm"
							data-toggle="modal"
							data-target={'#' + this.props.bill._id}
						>
							Chi tiết
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
													<tr>
														<th style={{ width: '5%' }}>STT</th>
														<th style={{ width: '45%' }}>Tên sản phẩm</th>
														<th style={{ width: '20%' }}>Giá</th>
														<th style={{ width: '15%' }}>Số lượng </th>
														<th style={{ width: '15%' }}>Thành tiền</th>
													</tr>
												</thead>
												<tbody>
													{showBoughtProucts}
													<tr>
														<td style={{ width: '5%' }} />
														<td style={{ width: '45%' }} />
														<td style={{ width: '20%' }} />
														<td style={{ width: '15%' }}>Tổng cộng </td>
														<td style={{ width: '15%' }}>
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

							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Save changes
								</button>
							</div>
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
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BillItem);
