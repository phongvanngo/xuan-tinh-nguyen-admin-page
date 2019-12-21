import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions'

class List extends Component {

  componentDidMount() {
    this.props.onGetUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div className="List">
        <div className="card">
          <div className="card-header">Danh sách tài khoản</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{ width: '5%' }} className="text-center">STT</th>
                <th style={{ width: '18%' }}>Username</th>
                <th style={{ width: '12%' }}>Sản phẩm</th>
                <th style={{ width: '10%' }}>Đơn</th>
                <th style={{ width: '10%' }}>Đội</th>
                <th style={{ width: '13%' }}>Người dùng</th>
                <th style={{ width: '10%' }}>Bài viết</th>
                <th style={{ width: '10%' }}>Feedback</th>
                <th style={{ width: '5%' }}></th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => {
                  return (
                    <Item stt={index}
                      key={index}
                      _id={user._id}
                      username={user.username}
                      password={user.password}
                      billPermis={user.billPermis}
                      userPermis={user.userPermis}
                      postPermis={user.postPermis}
                      teamPermis={user.teamPermis}
                      feedbackPermis={user.feedbackPermis}
                      productPermis={user.productPermis} />
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetUsers: () => {
      dispatch(actions.actFetchUsersRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);