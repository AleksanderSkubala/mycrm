import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Main from './components/Main';
import Dashboard from './components/dashboard/Dashboard'

ReactDOM.render((
    <Router>
            <Route path="/" component={Main} />
            <Route path="/dashboard" component={Dashboard} />
    </Router>
), document.getElementById('root'));
