import HelloWorld from './HelloWorld';
import ParcelDetails from './ParcelDetails';
import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {render} from 'react-dom';

const App = ()=>
(
  <MuiThemeProvider>
  <ParcelDetails />
</MuiThemeProvider>
);

render(<App/>, document.getElementById('app'));
