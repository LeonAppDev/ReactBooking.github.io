import React from 'react';
import {render} from 'react-dom';
import App from 'components/App';
import Home from 'components/Home';
import views from 'components/Views';

import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from 'react-router-dom';

import DataActions  from 'actions/DataActions';


class AppInitializer {

    buildRoutes(data) {
        return data.pages.map((page, i) => {
            const component = views[page.slug];
            return (
                <Route
                    getComponent={(nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require(component).default);
                        });
                    }}
                    key={ page.id }
                    path={`/${page.slug}`}
                />
            );
        });
    }

    run() {
        DataActions.getPages(response=>{
            render(
                <Router history={browserHistory}>
                    <Route path="/" component={ App } >
                        <IndexRoute component={ Home } />

                        {this.buildRoutes(response)}
                    </Route>
                    <Redirect from="*" to="/" />
                </Router>
                , document.getElementById('root')
            );
        });
    }
}

new AppInitializer().run();
