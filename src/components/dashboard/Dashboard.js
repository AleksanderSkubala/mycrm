import React from 'react';
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.processList = this.processList.bind(this);
    }

    componentDidMount = async () => {
        axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem('token')}`};
        await axios.get(
            'https://mycrm-api.herokuapp.com/processes'
        ).then(res => {
            this.setState({data: res.data});
            console.log(this.state.data);
         }).catch((error) => {
            console.log(error.response);
        });
    };

    processList() {
        return this.state.data.map(process => (
            <li key={process.id}>{process.name}</li>
        ))
    }

    render() {
        return (
            <div className="container">{this.state &&
                <ul>{this.processList()}</ul>
            }</div>
        )
    }
}

export default Dashboard;
