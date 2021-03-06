import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { fromJS } from 'immutable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from 'setup/store';
import Router from 'setup/Router';

injectTapEventPlugin();
const initialState = fromJS({});
const store = configureStore(initialState);

function renderApp(Component) {
  render (
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
}

renderApp(Router);

if (module.hot) {
  module.hot.accept('./setup/Router/index.js', () => {
    const NewApp = require('./setup/Router/index.js').default;
    renderApp(NewApp);
  });
}
