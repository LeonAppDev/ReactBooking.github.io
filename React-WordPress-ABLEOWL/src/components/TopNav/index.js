import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getPages } from 'reducers/pagesEndPoint/actions';
import { pagesInfoSelector } from 'reducers/pagesEndPoint/selectors';

const mapStateToProps = state => ({
  pages: pagesInfoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getPages: () => dispatch(getPages()),
});

export class TopNav extends Component {
  static propTypes = {
    pages: ImmutablePropTypes.list,
    getPages: PropTypes.func,
  };
  static defaultProps = {
    pages: Map(),
    getPages: () => {},
  };

  componentDidMount() {
    this.props.getPages();
  }

  render() {
    const { pages } = this.props;
    return (
      <header>
        {
          pages.map(page =>
            <Link key={page.get('id')} to={`/${page.get('slug')}`} style={{marginRight: '10px'}}>{page.getIn(['title', 'rendered'])}</Link>
          )
        }
      </header>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
