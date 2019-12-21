import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class List extends Component {

  componentDidMount() {
    this.props.onGetProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <div className="row">
        <div className="col-12">
          <div className="List ">
            <div className="card">
              <div className="card-header">Danh sách sản phẩm</div>
              <table className="table table-hover ">
                <thead>
                  <tr>
                    <th style={{ width: '5%' }} className="text-center">STT</th>
                    <th style={{ width: '21%' }}>Tên</th>
                    <th style={{ width: '27%' }}>Mô tả</th>
                    <th style={{ width: '10%' }}>Giá</th>
                    <th style={{ width: '13%' }}>Ngày sản xuất</th>
                    <th style={{ width: '12%' }}>Hạn sử dụng</th>
                    <th style={{ width: '10%' }}>Tinh chỉnh</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((sanpham, index) => {
                      return (
                        <Item
                          stt={index}
                          key={index}
                          _id={sanpham._id}
                          tensp={sanpham.tensp}
                          mota={sanpham.mota}
                          gia={sanpham.gia}
                          ngaysx={sanpham.ngaysx}
                          hansd={sanpham.hansd}
                          img={sanpham.img}
                        />
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: () => {
      dispatch(actions.actFetchProductsRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);