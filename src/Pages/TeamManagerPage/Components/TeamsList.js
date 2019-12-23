import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { closeTeamsList, addTeamRequest } from './../../../Actions/TeamManagerAction';
import TeamItem from './TeamItem';
class TeamsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}
	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]: value
		});
	};

	render() {
		var showTeamsList = this.props.teams.map((ele, index) => {
			return <TeamItem index={index + 1} key={index} team={ele} />;
		});
		return (
			<Fragment>
				<div className="row" style={{ marginBottom: 20 }}>
					<div className="col-8" />
					<div className="col-2">
						<button
							style={{ width: '150px' }}
							onClick={this.props.exit}
							type="button"
							className="btn btn-danger"
						>
							Quay lại
						</button>
					</div>
					<div className="col-xs-2">
						<button
							data-toggle="modal"
							data-target={'#addTeam'}
							style={{ width: '150px' }}
							type="button"
							className="btn btn-info"
						>
							Thêm đội hình
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div class="card">
							<div className="card-header">Danh sách đội hình</div>
							<table class="table table-hover">
								<thead>
									<tr>
										<th style={{ width: '5%' }}>STT</th>
										<th style={{ width: '85%' }}>Tên đội hình</th>
										<th style={{ width: '10%' }} />
									</tr>
								</thead>
								<tbody>{showTeamsList}</tbody>
							</table>
						</div>
					</div>
				</div>
				{/* modal add team */}
				<div
					className="modal fade"
					id="addTeam"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Thêm đội hình
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="col-12">
									<div className="form-row">
										<div className="col-lg-2 col-xl-1 ">
											<label className="form-label">Tên:</label>
										</div>
										<div className="col-lg-10 col-xl-10">
											<input //title--------------------------------
												type="text"
												className="form-control"
												name="name"
												onChange={this.onChange}
												value={this.state.name}
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button
									onClick={() => {
										this.props.onAddTeam({
											name: this.state.name
										});
									}}
									type="button"
									class="btn btn-success"
									data-dismiss="modal"
								>
									Lưu
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
		teams: state.teams
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		exit: () => {
			dispatch(closeTeamsList());
		},
		onAddTeam: (name) => {
			dispatch(addTeamRequest(name));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
