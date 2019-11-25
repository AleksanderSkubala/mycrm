import React from 'react';
import './Process.css';
import { useParams } from 'react-router-dom';

function Child() {
    let { id } = useParams();
    console.log(id);
    return (
        <h1>{id}</h1>
    )
}

class Process extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1'
        }
    }

    render() {
        return (
            <>
                {<Child />}
            </>
        );
    }
}

export default Process;