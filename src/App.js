import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarNavbar from './Layout/AdminPageLayout/SidebarNavbar';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Router> 
      <Switch>
        <Routes/>
      </Switch>
    </Router>
    )
  }
}

export default App;