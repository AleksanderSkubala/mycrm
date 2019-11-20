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
        //  await axios.get(
        //     'https://mycrm-api.herokuapp.com/processes'
        // ).then(res => {
        //     this.setState({data: res.data});
        //     console.log(this.state);
        //  }).catch((error) => {
        //     console.log(error.response);
        // });
         let res = await axios.get('https://mycrm-api.herokuapp.com/processes');
         let { data } = res.data;
         this.setState({data: data});
    };

    processList() {
        return this.state.data.map(process => (
            <li key={process.id}>{process.name}</li>
        ))
    }

    render() {
        return (
            <>{this.state &&
            <ul>{this.processList()}</ul>
            }</>
        )
    }
}

export default Dashboard;
