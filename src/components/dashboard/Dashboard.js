import React from 'react';
import './Dashboard.css';
import axios from 'axios';
axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem('token')}`};

function ProcessList(data) {
    return (
      <>{this.state.data &&
          <ul>{this.state.data.map(process => {
            return <li key={process.id}>{process.name}</li>
          })}</ul>
      }</>
    );
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.processList = this.processList.bind(this);
    }

    componentDidMount = async () => {
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
