import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openPostForm, fetchBillDataRequest } from './../../Actions/Actions'
import BillList from './BillsList'


class PostManager extends Component {

  componentDidMount() {
    this.props.fetchAllBillData();
  }
  render() {
    return (
      <div className="container-fluid">
        <BillList />
      </div>


    )
  }
}

const mapStateToProps = (state) => {

  return {
    isDisplayPostForm: state.isDisplayPostForm
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenPostForm: () => {
      dispatch(openPostForm())
    },
    fetchAllBillData: () => {
      dispatch(fetchBillDataRequest())
    },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PostManager);
