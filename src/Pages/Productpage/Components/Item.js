import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class Item extends Component {

  onEditProduct = (product) => {
    this.props.onSelectProduct(product);
    this.props.onShowForm();
  }

    render(){
      const item = this.props;
      return (
            <tr>
                <td className="text-center">{item.stt+1}</td>
                <td>{item.tensp}</td>
                <td>{item.mota}</td>
                <td>{item.gia}</td>
                <td>{item.ngaysx}</td>
                <td>{item.hansd}</td>
                <td>
                    <button onClick={() => this.onEditProduct(item)} type="button" className="btn btn-warning">Edit</button>
                    <button style={{marginLeft: '5px'}} onClick={() => { if (window.confirm('Bạn có muốn xóa sản phẩm này?')) item.onDelProduct(item) } } type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onDelProduct: product => {
        dispatch(actions.delProductRequest(product));
      },
      onSelectProduct: product => {
        dispatch(actions.isSelected(product));
      },
      onShowForm: () => {
        dispatch(actions.showForm());
      }
    }
  }

  export default connect(null, mapDispatchToProps)(Item);