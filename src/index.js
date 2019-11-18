import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import App from './components/App';

ReactDOM.render((
    <Router>
        <div className="container">
            <Route path="/" component={App} />
        </div>
    </Router>
), document.getElementById('root'));