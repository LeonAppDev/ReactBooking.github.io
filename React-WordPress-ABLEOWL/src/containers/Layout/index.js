import React, { PropTypes, Component } form 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from 'component/Nav';
import { routes } from 'setup/Router';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  static defaultProps = {
    children: '',
  };

  componentDidMount() {

  }
  getNav = ({ match: { params: { pageId } } }) => {
    let backUrl = null;
    if (pageId) backUrl = '/home';
    return (
      <Nav
        backUrl={backUrl}
      />
    );
  }
  render() {
    const { children } = this.props;
    const { getNav } = this;
    return (
      <div>
        <Switch>
        {
          routes.map(route => <Route key={route.path} component={getNav} path={route.path}) />)
        }
        </Switch>
        {children}
      </div>
    );
  }
}

export default Layout;
