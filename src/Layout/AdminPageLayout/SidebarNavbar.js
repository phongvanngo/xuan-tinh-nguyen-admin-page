import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNavbar.css';
import { connect } from 'react-redux';
import * as actions from './../../Actions/Actions';
import Menus from './Menus';

class SidebarNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplaySidebar: true,
      title: 'Quản lý sản phẩm',
    }
  }

  logOut = () => {
    localStorage.removeItem("accessToken");
    this.props.isntAuthenticated();
  }

  onClick = () => {
    this.setState({
      isDisplaySidebar: !this.state.isDisplaySidebar
    })
  }

  setTitleNavbar = (title) => {
    console.log('dfsdf  ')
    this.setState({
      title: title,
    })
  }


  render() {
    const { children } = this.props;
    return (
      <div >
        <nav id="sidebar" className={this.state.isDisplaySidebar ? "sidebarActive" : "sidebarDeactive"} >
        <div className="sidebar-title">
            <h5>Xuân tình nguyện 2020</h5>
            <h8>Admin page</h8>
          </div>
          
          <div className="sidebar-header">

            <h4 style ={{color:"yellow"}} ><i style ={{marginRight:"10px"}}class="fas fa-user-circle"> </i>{localStorage.getItem("username")}</h4>
            <ul class="list-unstyled CTAs">
            <NavLink to="/feedback" onClick={() => { if (window.confirm('Bạn có muốn đăng xuất?')) this.logOut() }} >
              <li>
                <a href="#/" className="download">Đăng xuất</a>
              </li>
            </NavLink>
          </ul>
          </div>

          <ul className="list-unstyled components">
            <p> <h5>Chức năng chính</h5></p>
            <Menus/>
          </ul>
        </nav>

        <nav className="navbar navbar-default ">
          <div className="container-fluid">
            <div className="navbar-header">
              <button style={{ float: 'left' }} type="button" id="sidebarCollapse" className="btn btn-info navbar-btn" onClick={this.onClick}>
                <i className="fas fa-bars"></i>
                <span></span>
              </button>
              <h3 style={{ float: 'left', marginLeft: 10 }}>{this.props.CurrentPage}</h3>
              
            </div>
          </div>
        </nav>
        {children}
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isntAuthenticated: () => {
      dispatch(actions.isntAuthenticated())
    },
    onChangePage: (pageName) => {
      dispatch(actions.changePage(pageName))
    }
  }
};
const mapStateToProp = state => {
  return {
    CurrentPage: state.currentPage,
    userName: state.loginUser.username
  }
}


export default connect( mapStateToProp, mapDispatchToProps)(SidebarNavbar);