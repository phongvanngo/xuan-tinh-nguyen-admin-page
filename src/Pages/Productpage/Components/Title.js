import React, { Component } from 'react';
import Login from './Login';

class Title extends Component {
    render(){
      const { onLogin } = this.props;
      return (
        <div className="Title">
            <div className="row">
              <Login className="col-md-6" onLogin={onLogin} />         
            </div>
        </div>
      );
    }
  }
  
  export default Title;