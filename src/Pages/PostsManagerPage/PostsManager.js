import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostsList from './PostsList';

class PostManager extends Component {

  render() {
    return (
      <div className="container-fluid">
        {this.props.isDisplayPostForm ? <PostForm /> : <PostsList />}
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

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PostManager);
