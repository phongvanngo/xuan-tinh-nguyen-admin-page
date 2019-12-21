import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../Actions/Actions';
import './main.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  login = () => {
    this.setState(() => ({
      redirectToReferrer: true
    }))
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.state;
    this.props.onLogin(user);
  }

  render() {
    const { username, password } = this.state;
    if (this.props.isAuthenticated) {
      const { history } = this.props;
      history.push('/product');
    }
    return (
      <div className="limiter">
        <div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
          <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSubmit}>
              <span style={{ paddingBottom: "5px" }} className="login100-form-title p-b-53">
                Sign In
            </span>
              <h9 style={{ marginLeft: "90px" }}>XUÂN TÌNH NGUYỆN 2020 ADMIN PAGE</h9>
              <div className="p-t-31 p-b-9">
                <span className="txt1">
                  Username
              </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Username is required">
                <input className="input100" type="text" name="username" value={username} onChange={this.handleInputChange} />
                <span className="focus-input100" />
              </div>
              <div className="p-t-13 p-b-9">
                <span className="txt1">
                  Password
              </span>
                <a href="#/" className="txt2 bo1 m-l-5">
                  Forgot?
              </a>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="password" value={password} onChange={this.handleInputChange} />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" onClick={() => this.handleSubmit.bind(this)} type="submit">
                  Login
              </button>
              </div>
              <div className="w-full text-center p-t-55">
                <span className="txt2">
                  From WEBDEV STUDIO
              </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => {
      dispatch(actions.loginRequest(user));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
