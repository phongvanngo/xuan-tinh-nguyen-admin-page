import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import List from './Components/List';


class Accountpage extends Component {
  render(){
    return (
      <div className ="container-fluid">
        <Title/>
        <hr/>
        <Form />
        <br/>
        <List />
      </div>
    );
  }
}

export default Accountpage;