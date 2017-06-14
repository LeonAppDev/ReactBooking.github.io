import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'containers/Layout';
import HomePage from 'containers/HomePage';
import NotReadyPage from 'containers/NotReadyPage';

export const routes = [
  { path: '/home', component: HomePage },
  { path: '*', component: NotReadyPage },
];

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {
            routes.map(route =>
              <Route key={route.path} component={route.component} path={route.path}) />,
          }
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
