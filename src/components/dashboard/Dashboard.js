import React from 'react';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProcessList from "../processList/ProcessList";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.changeState = this.changeState.bind(this);
    }

    changeState(state) {
        this.setState(state);
    }

    render() {
        return (
        <Router>
            <div className="dashboard">
                <header className="dashboard__header">
                    <h1>MyCRM</h1>
                </header>
                <nav className="dashboard__nav">
                    <Link to="/clients">Clients</Link>
                </nav>
                <section className="dashboard__section">
                    <Switch>
                        <Route path="/clients">
                            <h1>Users</h1>
                        </Route>
                        <Route path="/">
                            <ProcessList changeState={this.changeState}/>
                        </Route>
                    </Switch>
                </section>
            </div>
        </Router>
        )
    }
}

export default Dashboard;
