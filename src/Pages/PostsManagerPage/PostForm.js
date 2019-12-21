import React, { Component } from 'react';
import { connect } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ImgurUploaderInit from 'ckeditor5-imgur-uploader';
import { closePostForm, addPostRequest, updatePostRequest, set_isPostEditing_null } from '../../Actions/Actions'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.isPostEditing !== null ? props.isPostEditing.title : '',
      author: props.isPostEditing !== null ? props.isPostEditing.author : '',
      content: props.isPostEditing !== null ? props.isPostEditing.content : ''
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  onSavePost = () => {

    if (!this.state.title || !this.state.content || !this.state.author) {
      alert('Bạn cần nhập đầy đủ nội dung');
    } else {
      var d = new Date();
      var time_created = d.getHours().toString() + ':' +
        + d.getMinutes().toString() + ' ' +
        + d.getDate().toString() + '/' +
        + d.getMonth().toString() + '/' +
        +d.getFullYear().toString();
        
      var PostData = {
        
        id: this.props.isPostEditing === null ? '' : this.props.isPostEditing._id,
        title: this.state.title,
        author: this.state.author,
        content: this.state.content,
        time_created: time_created,
      }

      //post data --------------
      
      if (this.props.isPostEditing === null) {
        this.props.addNewPost(PostData)
      } else {
        this.props.onUpdatePost(PostData)
      }


      alert('Bài viết đã lưu');
      this.props.onClosePostForm();
    }

  }

  render() {
    const ImgurUploader = ImgurUploaderInit({ clientID: '923fe11172c3b60' });
    return (
      <div>

        {/* header  --------------------------------*/}
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "#fffff0" }}>

            {this.props.isPostEditing !== null ? 'Chỉnh sửa bài viết' : 'Viết bài mới'}

            <button data-toggle="modal" data-target="#cancelArticle" type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

          </div>
          <div className="card-body">
            {/* compose the article --------------*/}
            <form className="col-12">
              <div className="form-row">
                <div className="col-lg-2 col-xl-1 "><label className="form-label" >Tiêu đề:</label></div>
                <div className="col-lg-10 col-xl-10">
                  <input //title--------------------------------
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title} />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col-lg-2 col-xl-1 "><label className="form-label" >Tác giả:</label></div>
                <div className="col-lg-10 col-xl-10">
                  <input  //author-------------------------------
                    type="text"
                    className="form-control"
                    onChange={this.onChange}
                    value={this.state.author}
                    name="author" />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col-lg-2 col-xl-1 "><label className="form-label" >Nội dung:</label></div>
                <div className="col-lg-10 col-xl-10">
                  <CKEditor //content-------------------------------
                    editor={ClassicEditor}
                    data={this.state.content}
                    config={{
                      extraPlugins: [ImgurUploader]
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      this.setState({
                        content: data
                      })
                    }}
                  />
                </div>
              </div>
            </form>

          </div>
          {/* compose the article --------------*/}
          <div className="card-footer text-muted">
            <button
              style={{ float: 'right' }}
              type="button"
              className="btn btn-success btn-sm"
              onClick={this.onSavePost}
            >Lưu</button>
          </div>
        </div>

        {/* modal box alert about cancelling the article */}
        <div className="modal fade" id="cancelArticle" tabIndex="-1" role="dialog" aria-labelledby="cancelArticle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="cancelArticle">Bạn có chắc chắn hủy bài viết ?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.props.onClosePostForm}
                  data-dismiss="modal">
                  Đồng ý</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isPostEditing: state.isPostEditing
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onClosePostForm: () => {
      dispatch(closePostForm())
      dispatch(set_isPostEditing_null())
    },
    addNewPost: (postData) => {

      dispatch(addPostRequest(postData));
    },
    onUpdatePost: (postData) => {

      dispatch(updatePostRequest(postData));
      dispatch(set_isPostEditing_null())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
