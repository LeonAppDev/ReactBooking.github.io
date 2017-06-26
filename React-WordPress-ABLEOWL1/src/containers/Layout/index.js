import React, { PropTypes, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'setup/Router';

import TopNav from 'components/TopNav';
import FooterNav from 'components/FooterNav';

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
            <Switch>
             {
               routes.map(route => <Route key={route.path} component={FooterNav} path={route.path} />)
             }
           </Switch>
          </div>
      );
  }
}

export default Layout;
