import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeedbacksList from './FeedbacksList';
import { openPostForm } from './../../Actions/Actions';

class PostManager extends Component {

  render() {
    return (
      <div className="container-fluid">
       <FeedbacksList />
      </div>

    )
  }
}

const mapStateToProps = (state) => {

  return {
    feedbacks : state.feedbacks
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenPostForm: () => {
      dispatch(openPostForm())
    },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PostManager);
