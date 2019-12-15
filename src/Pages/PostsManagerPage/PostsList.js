import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openPostForm, fetchPostsDataRequest } from '../../Actions/Actions'
import PostItem from './PostItem'

class PostsList extends Component {

  componentDidMount() {

    this.props.fetchAllPosts();
  }

  render() {

    
    var showPostsList = this.props.posts.map((ele, index) => {
      return (
        <PostItem
          post={ele}
          key={index}
          index={index + 1}
        />
      )
    })
    return (
      <div>
        <div className="card">
          <div className="card-header">Danh sách bài viết</div>
          <div className="card-body">
            <table className="table border">
              <tbody>
                {showPostsList}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted">
            <button
              style={{ float: 'right' }}
              type="button"
              onClick={this.props.onOpenPostForm}
              className="btn btn-success btn-sm">
              Bài mới
              </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    posts: state.posts
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenPostForm: () => {
      dispatch(openPostForm())
    },
    fetchAllPosts: () => {
      dispatch(fetchPostsDataRequest());
    },

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
