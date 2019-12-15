import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';
import ModalSuccess from './ModalSuccess';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            _id: '',
            tensp: '',
            mota: '',
            gia: '',
            ngaysx: '',
            hansd: '',
            alert: null
        };    
        this.validator = new SimpleReactValidator();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onShowForm = this.onShowForm.bind(this);
    }

    componentDidMount() {
            this.setState({
                _id: this.props.itemSelected._id,
                tensp: this.props.itemSelected.tensp,
                gia: this.props.itemSelected.gia,
                mota: this.props.itemSelected.mota,
                ngaysx: this.props.itemSelected.ngaysx,
                hansd: this.props.itemSelected.hansd
              });
      }

    componentWillReceiveProps(nextProps) {
        if(nextProps.itemSelected !== null) {
          this.setState({
            _id: nextProps.itemSelected._id,
            tensp: nextProps.itemSelected.tensp,
            gia: nextProps.itemSelected.gia,
            mota: nextProps.itemSelected.mota,
            ngaysx: nextProps.itemSelected.ngaysx,
            hansd: nextProps.itemSelected.hansd
            });
        }
        else {
            this.setState({
                _id: '',
                tensp: '',
                mota: '',
                gia: '',
                ngaysx: '',
                hansd: ''
            });
        }
      }

      onShowForm(){
        this.props.onToggleForm();
        this.props.onClearItem({
            _id: '',
            tensp: '',
            mota: '',
            gia: '',
            ngaysx: '',
            hansd: ''
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const newItem = this.state;
         if (this.validator.allValid()) {
            if (newItem._id === ''){
                this.onShowForm();
                this.props.onAddProduct(newItem);
            }
            else {
                this.onShowForm();
                this.props.onEditProduct(newItem);
            }
        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
            event.preventDefault();
        }
    }

    render(){
        const { tensp, mota, gia, ngaysx, hansd } = this.state;
        let showForm = null;
        let valueForm = 'Thêm sản phẩm';
        if (this.props.showForm === true){
            valueForm = 'Hủy';
            showForm = (
            <div>
                <br/>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="ex1">Tên</label>
                                <input name="tensp" className="form-control" id="ex1" type="text" placeholder="Name" value={tensp} onChange={this.handleInputChange}  />
                                {this.validator.message('Ten', tensp, 'required')}
                            </div>
                            <div className="col-3">
                                <label htmlFor="ex2">Mô Tả</label>
                                <input name="mota" value={mota} onChange={this.handleInputChange} className="form-control" id="ex2" type="text" placeholder="Mô tả" require="true" />
                                {this.validator.message('Mota', mota, 'required')}
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex3">Giá</label>
                                <input name="gia" value={gia} onChange={this.handleInputChange} className="form-control" id="ex3" type="text" placeholder="Giá" require="true" />
                                {this.validator.message('Gia', gia, 'required')}
                            </div>
                            <div className="col-2">
                                <label htmlFor="ex3">NSX</label>
                                <input name="ngaysx" value={ngaysx} onChange={this.handleInputChange} className="form-control" id="ex3" type="date" placeholder="NSX" require="true" />
                                {this.validator.message('Ngaysx', ngaysx, 'required')}
                            </div>
                            <div className="col-2">
                                <label htmlFor="ex3">HSD</label>
                                <input name="hansd" value={hansd} onChange={this.handleInputChange} className="form-control" id="ex3" type="date" placeholder="HSD" require="true" />
                                {this.validator.message('Hansd', hansd, 'required')}
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex4">Xác nhận</label>
                                <button onClick={() => { if (window.confirm('Bạn có muốn sửa sản phẩm này?')) this.handleSubmit.bind(this) } } type="submit" className="btn btn-primary" id="ex4" value="Submit">Submit</button>
                                {this.state.alert}
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex5">Hủy bỏ</label>
                                <button onClick={() => this.onShowForm()} type="button" className="btn btn-dark" id="ex5">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            );
        }

      return (
            <div className="col-xs-2">
                <button style={{width: '150px'}} onClick={this.onShowForm} type="button" className="btn btn-info">{valueForm}</button>
                {showForm}
                <ModalSuccess/>
            </div>
      );
    }
  }
  
  const mapStatetoProps = state => {
        return {
            showForm: state.isDisplayForm,
            itemSelected: state.productSelected
        }
    }

  const mapDispatchToProps = dispatch => {
      return {
          onAddProduct: product => {
              dispatch(actions.addProductRequest(product));
          },
            onToggleForm: () => {
            dispatch(actions.toggleForm());
          },
            onEditProduct: product => {
                dispatch(actions.editProductRequest(product));
          },
            onClearItem: item => {
                dispatch(actions.isSelected(item));
          }
      }
  }


  export default connect(mapStatetoProps, mapDispatchToProps)(Form);
