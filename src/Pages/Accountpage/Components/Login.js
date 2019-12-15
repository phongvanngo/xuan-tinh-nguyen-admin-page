import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            username: this.props.user.username,
            password: this.props.user.password,
          });
  }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user !== null) {
        this.setState({
            username: this.props.user.username,
            password: this.props.user.password,
            });
        }
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
        console.log(this.props.user.password);
    }

    render(){
      return (
        <div className="col-md-6 login-form-1">
            {/* <h3>Xin chào</h3> */}
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="form-group col-md-4">
                    {/* <h3>{this.state.username}</h3> */}
                </div>
            </form>
        </div>
      );
    }
  }
  

  const mapStateToProps = state => {
      return {
          user: state.loginUser
      }
  }

  export default connect(mapStateToProps, null)(Login);