import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import ApiClient from './helper/ApiClient';
import configureStore from './redux/createStore';

import Profile from './component/profile/Header';
import DevTools from "./component/DevTools/DevTools";

import '../static/styles/main.css';
const client = new ApiClient();
const store = configureStore(client, window.__INITIAL_STATE__);
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
                <Route path="/" component={Profile}/>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);
