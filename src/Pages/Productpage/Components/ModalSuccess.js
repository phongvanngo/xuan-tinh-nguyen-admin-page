import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { showModalSuccess } from './../../../Actions/Actions';

class ModalSuccess extends Component {
    constructor(props){
        super(props);
        this.state = {
            showAlert: false
        }
    }
    
    closeAlert = () => {
        this.props.onShowModalSuccess('');
    }

  render(){
    return (
        <div>
            <Modal variant="success" onHide={this.closeAlert} show={this.props.alert.onShow}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>Thông báo</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <p>{this.props.alert.message}</p>
                </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.closeAlert} className="btn btn-primary" value="Submit">Close</Button>
                </Modal.Footer>
            </Modal>        
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        alert: state.modal  
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModalSuccess : message => {
            dispatch(showModalSuccess(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSuccess);