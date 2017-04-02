import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Main from './component/Main';

import './styles/main.css';

ReactDOM.render(
    <Router>
        <Route path="/" component={Main}/>
    </Router>,
    document.getElementById('root')
);
