'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter as Router} from 'react-router-dom';

import ApiClient from './helper/ApiClient';
import configureStore from './redux/createStore';

import routes from './routes';

import './main.css';
const client = new ApiClient();
const store = configureStore(client, window.__INITIAL_STATE__);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>,
  document.getElementById('root')
);
