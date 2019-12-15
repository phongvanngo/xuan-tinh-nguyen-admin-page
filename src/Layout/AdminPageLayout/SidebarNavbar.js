import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNavbar.css';
import { connect } from 'react-redux';
import * as actions from './../../Actions/Actions';

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
    this.setState({
      title: title
    })
  }


  render() {
    const { children } = this.props;
    return (
      <div >
        <nav id="sidebar" className={this.state.isDisplaySidebar ? "sidebarActive" : "sidebarDeactive"} >
          <div className="sidebar-header">
            <h4>Xuân tình nguyện 2019</h4>
          </div>

          <ul className="list-unstyled components">
            <p> <h5>Chức năng chính</h5></p>

            <NavLink to="/product" onClick={() => this.setTitleNavbar('Quản lý sản phẩm')}>
              <li>
                <a>Quản lý sản phẩm</a>
              </li>
            </NavLink>

            <NavLink to="/account" onClick={() => this.setTitleNavbar('Quản lý tài khoản')}>
              <li>
                <a>Quản lý tài khoản</a>
              </li>
            </NavLink>

            <NavLink to="/client" onClick={() => this.setTitleNavbar('Quản lý khách hàng')}>
              <li>
                <a>Quản lý khách hàng</a>
              </li>
            </NavLink>

            <NavLink to="/bill" onClick={() => this.setTitleNavbar('Quản lý chi tiết hóa đơn')}>
              <li>
                <a>Quản lý chi tiết hóa đơn</a>
              </li>
            </NavLink>

            <NavLink to="/team" onClick={() => this.setTitleNavbar('Quản lý đội hình')}>
              <li>
                <a>Quản lý đội hình</a>
              </li>
            </NavLink>

            <NavLink to="/post" onClick={() => this.setTitleNavbar('Quản lý bài viết')}>
              <li>
                <a>Quản lý bài viết</a>
              </li>
            </NavLink>

            <NavLink to="/feedback" onClick={() => this.setTitleNavbar('Hộp thư góp ý')}>
              <li>
                <a>Hộp thư góp ý</a>
              </li>
            </NavLink>
          </ul>

          <ul class="list-unstyled CTAs">
            <NavLink to="/feedback"onClick={() => {if (window.confirm('Bạn có muốn đăng xuất?')) this.logOut()}} >
              <li>
                <a class="download">Đăng xuất</a>
              </li>
            </NavLink>
          </ul>
        </nav>

        <nav className="navbar navbar-default ">
          <div className="container-fluid">
            <div className="navbar-header">
              <button style={{ float: 'left' }} type="button" id="sidebarCollapse" className="btn btn-info navbar-btn" onClick={this.onClick}>
                <i className="fas fa-bars"></i>
                <span></span>
              </button>
              <h3 style={{ float: 'left', marginLeft: 10 }}>{this.state.title}</h3>
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
    }
  }
}

export default connect(null, mapDispatchToProps)(SidebarNavbar);