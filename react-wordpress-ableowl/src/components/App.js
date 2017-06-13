import React, { PropTypes, Component } from 'react';
import Nav from './Nav';

class App extends Component {

    static propTypes = {
      children: PropTypes.node,
    }
    static defaultProps = {
      children: '',
    }
    render() {
      const { children } = this.props;
        return (
            <div className="wrapper">
                <Nav />
                {children}
            </div>
        );
    }
}
export default App;
