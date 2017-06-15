import React, { PropTypes, Component } from 'react';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getPages } from 'reducers/pagesEndPoint/actions';

const mapStateToProps = state => ({
  pages: pagesInforSelector(state),
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
    console.log('pages', pages);
    return (
      <div>
        <h1> testing </h1>
      </div>
    );
  }
}
