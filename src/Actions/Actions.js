import * as Types from '../Constants/ActionTypes'
import api from "../service/api";

//Ngo Van Phong--------------------------------------------------------------
export const closePostForm = () => {
  return {
    type: Types.CLOSE_POST_FORM,
  }
}
export const openPostForm = () => {
  return {
    type: Types.OPEN_POST_FORM,
  }
}
export const fetchPostsDataRequest = () => {
  return (dispatch) => {
    return api.get('post').then(res => {
      dispatch(fetchPostsData(res.data.posts))
    }).catch(error => {
      console.log(error);
      alert('lỗi kết nối');
    });
  };
}
export const fetchPostsData = (posts) => {
  return {
    type: Types.FETCH_POSTS_DATA,
    posts
  }
}

export const addPost = (post, id) => {
  return {
    type: Types.ADD_POST,
    post,
    id
  }
}

export const addPostRequest = (postData) => {
  return (dispatch) => {
    return api.post('post',postData).then(res => {
      dispatch(addPost(postData, res.data.info._id))
    }).catch(error => {
      console.log(error);
      alert('lỗi kết nối')
    });
  }
}
export const updatePost = (post) => {
  return {

    type: Types.UPDATE_POST,
    post
  }
}

export const updatePostRequest = (postData) => {
  var postDataChange = [
    {
      prop: 'title',
      value: postData.title
    },
    {
      prop: 'content',
      value: postData.content
    },
    {
      prop: 'author',
      value: postData.author
    }
  ]
  return (dispatch) => {
    return api.patch(`post/${postData.id}`,postDataChange).then(res => {
      dispatch(updatePost(postData))
    }).catch(error => {
      console.log(error);
      alert('lỗi kết nối')
    });
  }
}

export const editPost = (post) => {
  return {
    type: Types.EDIT_POST,
    post
  }
}
export const set_isPostEditing_null = () => {
  return {
    type: Types.SET_NULL,
  }
}

export const deletePostRequest = (id) => {
  return (dispatch) => {
    return api.delete(`post/${id}`).then(res => {
      dispatch(deletePost(id))
    }).catch(error => {
      console.log(error);
      alert('lỗi kết nối')
    });
  }
}

export const deletePost = (id) => {
  return {
    type: Types.DELETE_POST,
    id
  }
}

export const changePage =(pageName) => {
  return {
    type:Types.CHANGE_PAGE,
    pageName
  }
}

//hoang vien duy-----------------------------------------------------------------
export const addUser = user => {
  return {
      type: Types.ADD_USER,
      user
  }
}

export const addUserRequest = user => {
  return dispatch => {
      return api.post('admin/user', user)
          .then( response => {
              if (response.status === 200){
                  dispatch(actFetchUsersRequest());
                  dispatch(showModalSuccess('Thêm thành công'));
                  dispatch(addUser(user));
              }
              else {
                  console.log(response);
              }
          })
          .catch ( error => {
              console.log(error);
              dispatch(showModalSuccess('Thêm thất bại'));
          }); 
  }
}

export const delUser = user => {
  return {
      type: Types.DEL_USER,
      user
  }
}

export const delUserRequest = user => {
  return (dispatch) => {
      return api.delete(`admin/user/${user._id}`)
      .then( response => {
          if (response.status === 200){
              dispatch(delUser(user));
              dispatch(showModalSuccess('Xoá thành công'));
          }
          else {
              dispatch(showModalSuccess('Xoá thất bại'));
          }
      })
      .catch( err => {
          console.log(err);
          alert('Không thể thực hiện');
      })
  }
}

export const getUsers = users => {
  return {
      type: Types.GET_USER,
      users
  }
}

export const actFetchUsersRequest = () => {
  return dispatch => {
      return api.get('admin/user')
      .then( response => {
        dispatch(getUsers(response.data));
      })
      .catch( err => {
        console.log(err);
        alert("Khong co quyen truy cap");
      });
  }
}


export const showForm = () => {
return {
  type: Types.SHOW_FORM
}
}

export const toggleForm = () => {
return {
  type: Types.TOGGLE_FORM
}
}

export const showModalSuccess = message => {
  return {
      type: Types.SHOW_MODAL_SUCCESS,
      message
  }
}

export const addProduct = product => {
  return {
      type: Types.ADD_PRODUCT,
      product
  }
}

export const addProductRequest = product => {
  return dispatch => {
      return api.post('product', product)
        .then( response => {
            if (response.status === 200){
              dispatch(actFetchProductsRequest());
              dispatch(showModalSuccess('Thêm thành công'));
              dispatch(addProduct(product));
            }
          })
        .catch( err => {
          console.log(err);
          alert('Không thể thực hiện');
        })
  }
}

export const editProduct = product => {
  return {
      type: Types.EDIT_PRODUCT,
      product
  }
}

export const editProductRequest = product => {
  return (dispatch) => {
      return api.patch(`product/${product._id}`, product)
      .then( response => {
          if (response.status === 200){
              dispatch(editProduct(product));
              dispatch(showModalSuccess('Sửa thành công'));
          }
      })
      .catch( err => {
          console.log(err);
          alert('Không thể thực hiện');
      })
  }
}

export const delProduct = product => {
  return {
      type: Types.DEL_PRODUCT,
      product
  }
}

export const delProductRequest = product => {
  return (dispatch) => {
      return api.delete(`product/${product._id}`)
      .then( response => {
          if (response.status === 200){
              dispatch(delProduct(product));
              dispatch(showModalSuccess('Xoá thành công'));
          }
      })
      .catch( err => {
          console.log(err);
          alert('Không thể thực hiện');
      })
  }
}

export const getProducts = products => {
  return {
      type: Types.GET_PRODUCTS,
      products
  }
}

export const actFetchProductsRequest = () => {
  return dispatch => {
      return api.get('product')
      .then( response => {
        dispatch(getProducts(response.data));
      });
  }
}

export const isSelected = product => {
  return {
      type: Types.IS_SELECTED,
      product
  }
}

export const loginRequest = user => {
  return dispatch => {
      return api.post('user/login', user)
      .then( response => {
        if (response.status === 200){
          dispatch(isAuthenticated());
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("authenticated", 'true');
          localStorage.setItem("username", user.username);
          dispatch(loginUser(user));
          dispatch(showMenus(response.data.userInfo));
        }
      })
      .catch( err => {
          console.log(err); 
          alert('Không thể thực hiện');
      })
  }
}

export const isAuthenticated = () => {
  return {
      type: Types.IS_AUTHENTICATED
  }
}

export const loginUser = user => {
  return {
      type: Types.LOGIN_USER,
      user
  }
}

export const isntAuthenticated = () => {
  return {
      type: Types.LOGOUT_USER
  }
}

export const showMenus = menus => {
  return {
      type: Types.SHOW_MENUS,
      menus
  }
}