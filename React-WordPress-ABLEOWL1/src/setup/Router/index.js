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
import RedirectExternal from 'components/RedirectExternal';

export const routes = [
  { path: '/home', component: HomePage },
  { path: '/casestudies', component: CaseStudies },
  { path: '/journal', component: Journal },
  {path: '/theprocess', component: Process },
  {path: '/theskill', component: TheSkill },
  {path: '/theexceladvantage', component: ExcelAdvantage },
  {path: '/contact', component: Contact },
  {path: '/about', component: AboutPage },
 {path:'/onlinecourse',render: ()=>{window.open('http://www.ableowl.com/Products/GenieAddIn/GenieEssentialCourse.aspx?id=10');return <AboutPage />}},
  {path:'/onlinecourseskill',render: ()=>{window.open('http://www.ableowl.com/Products/GenieAddIn/GenieEssentialCourse.aspx?id=10');return <TheSkill />}},
  {path:'/qualification',render: ()=>{window.open('http://www.ableowl.com/products/Qualification/qualificationad9.aspx');return <AboutPage />}},
    {path:'/qualificationskill',render: ()=>{window.open('http://www.ableowl.com/products/Qualification/qualificationad9.aspx');return <TheSkill />}},
   {path:'/webinarecordings',render: ()=>{window.open('http://www.ableowl.com/Courses/WebinarRecording/MyVideos.aspx');return <AboutPage />}},
    {path:'/excelcourse',render: ()=>{window.open('http://www.ableowl.com/Courses/CoursesOverview.aspx');return <AboutPage />}},
     {path:'/geniemini',render: ()=>{window.open('http://www.ableowl.com/Genie/Download/AddIn.aspx');return <AboutPage />}},
      {path:'/hotline',render: ()=>{window.open('http://www.ableowl.com/products/hotline/hotlinead.aspx');return <AboutPage />}},
/*
  {path:'/qualification',render: ()=>{window.location = 'http://www.ableowl.com/products/Qualification/qualificationad9.aspx'; return <h1 style={{"text-align":"center"}}>Redirect.....</h1>}},
  {path:'/webinarecordings',render: ()=>{window.location = 'http://www.ableowl.com/Courses/WebinarRecording/MyVideos.aspx'; return <h1 style={{"text-align":"center"}}>Redirect.....</h1>}},
{path:'/excelcourse',render: ()=>{window.location = 'http://www.ableowl.com/Courses/CoursesOverview.aspx'; return <h1 style={{"text-align":"center"}}>Redirect.....</h1>}},
{path:'/geniemini',render: ()=>{window.location = 'http://www.ableowl.com/Genie/Download/AddIn.aspx'; return <h1 style={{"text-align":"center"}}>Redirect.....</h1>}},
*/

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
              <Route key={route.path} component={route.component} path={route.path} render={route.render}/>,
            )
          }
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
