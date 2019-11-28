import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './ProcessList.css';

class ProcessList extends React.Component {
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
            console.log(res.data);
        }).catch((error) => {
            this.setState({error: error.response});
        });
    };

    processList() {
        return this.state.data.map(process => (
            <li key={process.id}>
                <Link to={`/process/${process.id}`}>
                    <h3>{process.name}</h3>
                    <p>{process.description}</p>
                </Link>
            </li>
        ))
    }

    render() {
        return (
            <>
                {this.state.data &&
                    <ul>{this.processList()}</ul>
                }
                {this.state.error &&
                    <p>{this.state.error}</p>
                }
            </>
        )
    }
}

export default ProcessList;
