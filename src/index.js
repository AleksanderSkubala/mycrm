import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Main from './components/Main';

ReactDOM.render((
    <Router>
            <Route path="/" component={Main} />
            <Route path="/dashboard" component={Main} />
    </Router>
), document.getElementById('root'));
