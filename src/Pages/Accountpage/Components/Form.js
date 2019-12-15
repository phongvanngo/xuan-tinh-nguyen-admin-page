import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';
import ModalSuccess from './ModalSuccess';
import { Modal, Button,  Row, Col, FormGroup, FormCheck, FormLabel } from 'react-bootstrap';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            _id: '',
            username: '',
            password: '',
            productPermis: false,
            billPermis: false,
            postPermis: false,
            feedbackPermis: false,
            teamPermis: false,
            userPermis: false
        };    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onShowForm = this.onShowForm.bind(this);
    }

      onShowForm(){
        this.props.onToggleForm();
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
        const newUser = this.state;
            if (newUser._id === ''){
                this.onShowForm();
                this.props.onAddUser(newUser);
            }
            else {
                this.onShowForm();
                this.props.onEditProduct(newUser);
            }
        this.setState({
            _id: '',
            username: '',
            password: '',
            productPermis: false,
            billPermis: false,
            postPermis: false,
            feedbackPermis: false,
            teamPermis: false,
            userPermis: false
        });
    }

    render(){
        let showForm = null;
        let valueForm = 'Thêm tài khoản';
        if (this.props.showForm === true){
            valueForm = 'Hủy';
            showForm = (
            <Modal show={this.props.showForm} onHide={this.props.onToggleForm}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>Add User</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" className="form-control" type="text" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" className="form-control" id="ex1" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required />
                        </div>
                        <fieldset>
                            <FormGroup as={Row}>
                                <FormLabel as="legend" column sm={2}>
                                    Permisson
                                </FormLabel>
                                <Col sm={10}>
                                    <FormCheck
                                    type="checkbox"
                                    label="Product"
                                    name="productPermis"
                                    checked={this.state.productPermis}
                                    onChange={this.handleInputChange}
                                    />
                                    <FormCheck
                                    type="checkbox"
                                    label="Bill"
                                    name="billPermis"
                                    checked={this.state.billPermis}
                                    onChange={this.handleInputChange}
                                    />
                                    <FormCheck
                                    type="checkbox"
                                    label="Feedback"
                                    name="feedbackPermis"
                                    checked={this.state.feedbackPermis}
                                    onChange={this.handleInputChange}
                                    />
                                    <FormCheck
                                    type="checkbox"
                                    label="Team"
                                    name="teamPermis"
                                    checked={this.state.teamPermis}
                                    onChange={this.handleInputChange}
                                    />
                                    <FormCheck
                                    type="checkbox"
                                    label="User"
                                    name="userPermis"
                                    checked={this.state.userPermis}
                                    onChange={this.handleInputChange}
                                    />
                                    <FormCheck
                                    type="checkbox"
                                    label="Post"
                                    name="postPermis"
                                    checked={this.state.postPermis}
                                    onChange={this.handleInputChange}
                                    />                                    
                                </Col>
                            </FormGroup>
                        </fieldset>
                    </form>					                   
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSubmit} className="btn btn-primary" value="Submit">Submit</Button>
                    <Button className='btn-danger' onClick={this.props.onToggleForm}>Close</Button>
                </Modal.Footer>
            </Modal>
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
            showForm: state.isDisplayForm
        }
    }

  const mapDispatchToProps = dispatch => {
      return {
          onAddUser: user => {
              dispatch(actions.addUserRequest(user));
          },
            onToggleForm: () => {
            dispatch(actions.toggleForm());
          }
      }
  }


  export default connect(mapStatetoProps, mapDispatchToProps)(Form);
