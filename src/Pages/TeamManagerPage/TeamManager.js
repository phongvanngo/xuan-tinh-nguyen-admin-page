import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { openPostForm } from './../../Actions/Actions';

class PostManager extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
            
          </div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isDisplayPostForm: state.isDisplayPostForm
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onOpenPostForm: () => {
			dispatch(openPostForm());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostManager);
