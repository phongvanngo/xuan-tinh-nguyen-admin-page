import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openPostForm, editPost, fetchPostsDataRequest, deletePostRequest } from '../../Actions/Actions'

class PostItem extends Component {

  // componentDidMount() {
  //   this.props.fetchAllPosts();
  // }

  button_deletePost = () => {
    this.props.deletePost(this.props.post._id)
  }
  button_editPost = () => {
    this.props.onEditPost(this.props.post)
  }
  render() {
    return (
      <tr>
        <td style={{ width: '3%' }}>{this.props.index}</td>
        <td style={{ width:  '87%'}}>{this.props.post.title}</td>
        <td style={{ width: '10%'}}>
          {/* edit button------------------------ */}
          <button
          style={{marginRight:5}}
            onClick={this.button_editPost}
            className="btn btn-warning btn-sm">
            <i className="fas fa-pen"></i>
          </button>
          {/* delete button------------------------ */}
          <button
            data-toggle="modal"
            data-target={'#' + this.props.post._id}
            className="btn btn-danger btn-sm">
            <i className="fas fa-trash "></i>
          </button>
          {/* modalBox Alert --------------------------------------------------*/}
          <div className="modal fade" id={this.props.post._id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Bạn có chắc chắn xóa bài viết</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.button_deletePost}>Đồng ý</button>
                </div>
              </div>
            </div>
          </div>
          {/* modalBox Alert ------------------------------------------------------*/}
        </td>


      </tr>
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
    onEditPost: (post) => {
      dispatch(editPost(post));
      dispatch(openPostForm())
    },
    fetchAllPosts: () => {
      dispatch(fetchPostsDataRequest());
    },
    deletePost: (id) => {
      dispatch(deletePostRequest(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);