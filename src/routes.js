import React, {Component} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import RouteWithLayout from './Components/RouteWithLayout/RouteWithLayout'
import Homepage from "./Pages/Homepage/Homepage"
import NotFoundpage from "./Pages/NotFoundpage/NotFoundpage";
import Accountpage from "./Pages/Accountpage/Accountpage";
import Productpage from './Pages/Productpage/Productpage';
import Login from './Pages/Loginpage/Login';
import SidebarNavbar from './Layout/AdminPageLayout/SidebarNavbar';
import PostManager from './Pages/PostsManagerPage/PostsManager';
import BillManager from './Pages/BillManager/BillManager'
import TeamManager from './Pages/TeamManagerPage/TeamManager'

class Routes extends Component {
    render() {
      return (
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <RouteWithLayout component={Homepage} exact layout={SidebarNavbar} path="/dashboard" />
          <RouteWithLayout component={Accountpage} exact layout={SidebarNavbar} path="/account" />
          <RouteWithLayout component={Productpage} exact layout={SidebarNavbar} path="/product" />
          <RouteWithLayout component={PostManager} exact layout={SidebarNavbar} path="/post" />
          <RouteWithLayout component={BillManager} exact layout={SidebarNavbar} path="/bill" />
          <RouteWithLayout component={TeamManager} exact layout={SidebarNavbar} path="/team" />
          {/* <RouteWithLayout component={Productpage} exact layout={SidebarNavbar} path="/feedback" /> */}
          <Route path="/login" exact component={Login} />
          <RouteWithLayout component={NotFoundpage} exact layout={SidebarNavbar} path="/not-found" />
          <Redirect to="/not-found" />
        </Switch>
      );
    }
  }
  
  export default Routes;