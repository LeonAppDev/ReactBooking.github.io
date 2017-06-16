import React, { PropTypes, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNav from 'components/TopNav';
import { routes } from 'setup/Router';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  static defaultProps = {
    children: '',
  }
  componentDidMount() {

  }
  render() {
    const { children } = this.props;
      return (
          <div className="wrapper">
            <Switch>
            {
              routes.map(route => <Route key={route.path} component={TopNav} path={route.path} />)
            }
            </Switch>
            {children}
          </div>
      );
  }
}

export default Layout;
