import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import BookingFormPage from 'containers/BookingFormPage';
import NotReadyPage from 'containers/NotReadyPage';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/BookingFormPage" />
        <Route path="/BookingFormPage" component={BookingFormPage} />
        <Route path="*" component={NotReadyPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
