import React from 'react';
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.processList = this.processList.bind(this);
    }

    componentDidMount = async () => {
        axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem('token')}`};
        await axios.get(
            'https://mycrm-api.herokuapp.com/processes'
        ).then(res => {
            this.setState({data: res.data});
         }).catch((error) => {
            this.setState({error: error.response});
        });
    };

    processList() {
        return this.state.data.map(process => (
            <li key={process.id}>
                <h3>{process.name}</h3>
            </li>
        ))
    }

    render() {
        return (
            <div className="dashboard">
                <header className="dashboard__header">
                    <h1>MyCRM</h1>
                </header>
                <nav className="dashboard__nav"></nav>
                <section className="dashboard__section">
                    {this.state.data &&
                        <ul>{this.processList()}</ul>
                    }
                    {this.state.error &&
                        <p>{this.state.error}</p>
                    }
                </section>
            </div>
        )
    }
}

export default Dashboard;
