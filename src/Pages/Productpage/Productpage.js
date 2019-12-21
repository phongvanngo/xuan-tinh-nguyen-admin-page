import React, { Component } from 'react';
import Title from './Components/Title';
import List from './Components/List';
import Form from './Components/Form';
import { connect } from 'react-redux';

class Productpage extends Component {
  render(){
    return (
      <div className ="container-fluid">
        <Form />
        {this.props.showForm ? '':<List />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showForm: state.isDisplayForm,
    products: state.products
  }
}



export default connect(mapStateToProps, null)(Productpage);