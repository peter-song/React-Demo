import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ApiClient from './helper/ApiClient';
import configureStore from './redux/createStore';

import Profile from './component/profile/index';
import Ant from './component/ant/index';
import DevTools from "./component/DevTools/DevTools";

require('../static/js/html2canvas.js');

import './main.css';
const client = new ApiClient();
const store = configureStore(client, window.__INITIAL_STATE__);
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
                <div>
                    <div className="nav">
                        <ul>
                            <li><Link to="/">BasicInfo</Link></li>
                            <li><Link to="/ant">Ant Design</Link></li>
                        </ul>
                    </div>
                    <div style={{float: 'left', width: '80%'}}>
                        <Route exact path="/" component={Profile}/>
                        <Route path="/ant" component={Ant}/>
                    </div>
                </div>
            </Router>
            {/*<DevTools />*/}
        </div>
    </Provider>,
    document.getElementById('root')
);
