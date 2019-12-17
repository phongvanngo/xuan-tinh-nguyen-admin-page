import React, {Component} from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = ({ component, isAuthenticated, authenticated}) => {
  return (
    <Route
      render={props => {
        return isAuthenticated || authenticated ==='true' ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        );
      }}
    />
  );
};

class RouteWithLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  authenticated = () => {
    this.setState({
      isAuthenticated : true  
    });
  }

  componentDidMount(){
    this.authenticated();
  }

  render() {
    const { layout: Layout, component: Component } = this.props;
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return <Redirect to={`/login`} />;
          }}
        />
        <PrivateRoute 
          isAuthenticated={this.props.isAuthenticated}  
          authenticated={localStorage.getItem("authenticated")}
          component={matchProps => (  
            <Layout>
              <div id="board">
                <Component {...matchProps} />
              </div>
            </Layout>
          )}
        />  
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(RouteWithLayout);
