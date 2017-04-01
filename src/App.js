import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Greeter from './component/Greeter';

import './styles/main.css';

ReactDOM.render(
    <Router>
        <Route path="/" component={Greeter}/>
    </Router>,
    document.getElementById('root')
);
