import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <div className="row" style={{ marginBottom: 20 }}>
          <div className="col-10"></div>
          <div className="col-xs-2">
            <button
              style={{ width: '150px' }}
              type="button"
              onClick={this.props.onOpenPostForm}
              className="btn btn-info ">
              Thêm bài viết
              </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">Danh sách bài viết</div>
                <table className="table table-hover">
                  <tbody>
                    {showPostsList}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </Fragment>



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
