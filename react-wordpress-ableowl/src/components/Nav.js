import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import DataStore from 'stores/DataStore';

function Nav() {
  let allPages = DataStore.getAllPages();
  allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);
  return (
    <header>
      {
        allPages.map(page =>
          <Link key={page.id} to={`/${page.slug}`} style={{marginRight: '10px'}}>{page.title.rendered}</Link>
        )
      }
    </header>
  )
}

export default Nav;
