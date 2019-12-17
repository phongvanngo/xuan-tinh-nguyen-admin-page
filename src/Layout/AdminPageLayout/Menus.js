import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../Actions/Actions';

class Menus extends Component {
  showMenus = menus => {
    let listMenus = null;
    if (!menus){ 
      menus = [];
    }
    listMenus = menus.map((menu, index) => {
        return (
            <NavLink key={index} to={menu.url} onClick={()=>this.props.onChangePage(menu.name)}>
              <li>
                <a href="#/">{menu.name}</a>
              </li>
            </NavLink>
        );
    }); 
    return listMenus;
  }
  
    render() {
    return (
        <div>
            {this.showMenus(this.props.menus)}
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangePage: (pageName) => {
      dispatch(actions.changePage(pageName))
    },
  }
}

const mapStateToProp = state => {
  return {
    menus: state.menus
  }
}


export default connect( mapStateToProp, mapDispatchToProps)(Menus);