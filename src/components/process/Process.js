import React from 'react';
import './Process.css';
import axios from 'axios';

class Process extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        const { match: { params } } = this.props;
        console.log(params.id);
        await axios.get(`https://mycrm-api.herokuapp.com/transactions?process=${params.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(res => {
                this.setState({data: res.data})
            })
            .catch(err => this.setState({error: err.response}))
    }

    render() {
        return (
            <>
                {this.state.data.map(process => (
                    <h1>{process}</h1>
                ))}
            </>
        );
    }
}

export default Process;