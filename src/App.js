import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import configureStore from './store/configureStore';

import Profile from './component/profile/Header';

import './styles/main.css';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Profile}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
