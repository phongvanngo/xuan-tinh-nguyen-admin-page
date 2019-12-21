import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../Actions/Actions';
class Homepage extends Component {

  componentDidMount() {
    this.props.onChangePage('Giới thiệu')
  }
  render() {
    return (

      <div className="row">
        <div className="col-3"></div>
        <div className="col-9">
        <h4>WELCOME TO XTN 2020 ADMIN PAGE</h4>
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {

    onChangePage: (pageName) => {
      dispatch(actions.changePage(pageName))
    }
  }
};



export default connect(null, mapDispatchToProps)(Homepage);