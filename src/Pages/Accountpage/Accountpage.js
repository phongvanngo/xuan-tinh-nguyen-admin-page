import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import List from './Components/List';


class Accountpage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Form />
        <br />
        <div className="row">
          <div className="col-12">
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default Accountpage;