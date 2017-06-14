import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
// import { Map } from 'immutable';
// import ImmutablePropTypes from 'react-immutable-proptypes';
// import { connect } from 'react-redux';
// import { loadPages } from 'reducers/pagesEndPoint/actions';
// import { pagesInforSelector } from 'reducers/pagesEndPoint/selectors';

import DataStore from 'stores/DataStore';

// const mapStateToProps = state => ({
//   pages: pagesInforSelector(state),
// });
// const mapDispatchToProps = dispatch => ({
//   loadPages: () => dispatch(loadPages()),
// });
//
// class Nav extends Component {
//   static propTypes = {
//     pages: ImmutablePropTypes.list,
//     loadPages: PropTypes.func,
//   };
//   static defaultProps = {
//     pages: Map(),
//     loadPages: () => {},
//   };
//
//   componentDidMount() {
//     this.props.loadPages();
//   }
//
//   render() {
//     const { pages } = this.props;
//     console.log('pages', pages);
//     return (
//       <header>
//         <h1>this is nav</h1>
//       </header>
//     );
//   }
//
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Nav);
function Nav() {
  let allPages = DataStore.getAllPages();
  allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);
  console.log('allPages', allPages);
  return (
    <header>
      {
        allPages.map(page =>
          <Link key={page.id} to={`/${page.slug}`} style={{marginRight: '10px'}}>{page.title.rendered}</Link>
        )
      }
    </header>
  );
}

export default Nav;
