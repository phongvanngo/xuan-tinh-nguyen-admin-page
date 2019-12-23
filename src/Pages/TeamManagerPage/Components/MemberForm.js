import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { closeMemberForm, addMemberRequest, updateMemberRequest } from './../../../Actions/TeamManagerAction';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImgurUploaderInit from 'ckeditor5-imgur-uploader';

class TeamsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.isMemberEditing !== null ? props.isMemberEditing.name : '',
			mssv: props.isMemberEditing !== null ? props.isMemberEditing.mssv : '',
			team: props.isMemberEditing !== null ? props.isMemberEditing.team : props.teams[0]._id,
			img: props.isMemberEditing !== null ? props.isMemberEditing.img : ''
		};
	}

	componentDidMount() {
		window.scroll(0, 0);
	}

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]: value
		});
	};

	onSaveMember = () => {
		if (!this.state.name || !this.state.mssv || !this.state.team || !this.state.img) {
			alert('Bạn cần nhập đầy đủ nội dung');
		} else {
			var memberData = {
				id: this.props.isMemberEditing === null ? '' : this.props.isMemberEditing._id,
				name: this.state.name,
				mssv: this.state.mssv,
				team: this.state.team,
				img: this.state.img
			};
			if (this.props.isMemberEditing === null) {
				this.props.onAddMember(memberData);
			} else {
				this.props.onUpdateMember(memberData);
			}

			alert('Đã lưu');
			this.props.onCloseMemberForm();
		}
	};

	render() {
		const ImgurUploader = ImgurUploaderInit({ clientID: '923fe11172c3b60' });
		var showTeamSelect = this.props.teams.map((team, ele) => {
			return <option value={team._id}>{team.name}</option>;
		});
		return (
			<div className="row">
				<div className="col-12">
					{/* header  --------------------------------*/}
					<div className="card">
						<div className="card-header" style={{ backgroundColor: '#fffff0' }}>
							{this.props.isMemberEditing !== null ? 'Chỉnh sửa thành viên' : 'Thành viên mới'}

							<button
								data-toggle="modal"
								data-target="#cancelMember"
								type="button"
								className="close"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="card-body">
							{/* add member infomation --------------*/}
							<form className="col-12">
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
								<br />
								<div className="form-row">
									<div className="col-lg-2 col-xl-1 ">
										<label className="form-label">Mã số sinh viên:</label>
									</div>
									<div className="col-lg-10 col-xl-10">
										<input //mssvr-------------------------------
											type="text"
											className="form-control"
											onChange={this.onChange}
											value={this.state.mssv}
											id="exampleFormControlSelect1"
											name="mssv"
										/>
									</div>
								</div>
								{/* select team -------------------------------------*/}
								<br />
								<div className="row">
									<div className="col-lg-2 col-xl-1 ">
										<label className="form-label">Đội hình</label>
									</div>

									<div className="col-lg-10 col-xl-10">
										<select
											class="form-control"
											name="team"
											onChange={this.onChange}
											value={this.state.team}
										>
											{showTeamSelect}
										</select>
									</div>
								</div>
								{/* select team -------------------------------------*/}
								<br />
								<div className="form-row">
									<div className="col-lg-2 col-xl-1 ">
										<label className="form-label">Hình ảnh:</label>
									</div>
									<div className="col-lg-10 col-xl-10">
										<CKEditor //avatar -------------------------------
											editor={ClassicEditor}
											data={this.state.img}
											config={{
												extraPlugins: [ ImgurUploader ],
												toolbar: [ 'ImageUpload' ]
											}}
											onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log(data)
												this.setState({
													img: data
												});
											}}
										/>
									</div>
								</div>
							</form>
						</div>
						{/* upload avatar --------------*/}
						<div className="card-footer text-muted">
							<button
								style={{ float: 'right' }}
								type="button"
								className="btn btn-success btn-sm"
								onClick={this.onSaveMember}
							>
								Lưu
							</button>
						</div>
					</div>

					{/* modal box alert about cancelling the article */}
					<div
						className="modal fade"
						id="cancelMember"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="cancelMember"
						aria-hidden="true"
					>
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="cancelMember">
										Bạn có chắc chắn thoát ?
									</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										onClick={this.props.onCloseMemberForm}
										data-dismiss="modal"
									>
										Đồng ý
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isMemberEditing: state.isMemberEditing,
		teams: state.teams
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onCloseMemberForm: () => {
			dispatch(closeMemberForm());
		},
		onAddMember: (member) => {
			dispatch(addMemberRequest(member));
		},
		onUpdateMember: (member) => {
			dispatch(updateMemberRequest(member));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
