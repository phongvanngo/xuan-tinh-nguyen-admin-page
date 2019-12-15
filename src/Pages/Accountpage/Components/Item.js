import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions'

class Item extends Component {

  onShowPermis= boo => {
    if (boo) return 'Có';
    else return 'Không';
  }

    render(){
      const user = this.props;
      return (
            <tr>
                <td className="text-center">{user.stt+1}</td>
                <td>{user.username}</td>
                <td>{this.onShowPermis(user.productPermis)}</td>
                <td>{this.onShowPermis(user.billPermis)}</td>
                <td>{this.onShowPermis(user.teamPermis)}</td>
                <td>{this.onShowPermis(user.userPermis)}</td>
                <td>{this.onShowPermis(user.postPermis)}</td>
                <td>{this.onShowPermis(user.feedbackPermis)}</td>
                <td>
                    <button style={{marginLeft: '5px'}} onClick={() => { if (window.confirm('Bạn có muốn xóa sản phẩm này?')) user.onDelUser(user) } } type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onDelUser: product => {
        dispatch(actions.delUserRequest(product));
      },
    }
  }

  export default connect(null, mapDispatchToProps)(Item);