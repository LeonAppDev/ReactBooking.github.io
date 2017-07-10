import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'containers/Layout';
import HomePage from 'containers/HomePage';
import CaseStudies from 'containers/CaseStudies';
import Journal from 'containers/Journal';
import Process from 'containers/TheProcess';
import TheSkill from 'containers/TheSkill';
import ExcelAdvantage from 'containers/ExcelAdvantage';
import Contact from 'containers/Contact';
import AboutPage from 'containers/AboutPage';
import NotReadyPage from 'containers/NotReadyPage';
// import About from 'containers/About';

export const routes = [
  { path: '/home', component: HomePage },
  { path: '/casestudies', component: CaseStudies },
  { path: '/journal', component: Journal },
  {path: '/theprocess', component: Process },
  {path: '/theskill', component: TheSkill },
  {path: '/theexceladvantage', component: ExcelAdvantage },
  {path: '/contact', component: Contact },
  {path: '/about', component: AboutPage },
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
              <Route key={route.path} component={route.component} path={route.path} />,
            )
          }
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
