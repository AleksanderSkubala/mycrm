import React from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

localStorage.removeItem('token');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.listRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            name: this.refs.name.value,
            password: this.refs.password.value
        });
        axios.post( `https://mycrm-api.herokuapp.com/login?name=${this.refs.name.value}&password=${this.refs.password.value}`)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.setState({logged: true});
            })
            .catch((err) => {
                this.setState({error: err.response.data.info.message});
            })
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <div ref={this.listRef}>
                    <label>
                        Name:
                        <input type="text" name="name" ref="name"/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" ref="password"/>
                    </label>
                    <button onClick={this.handleSubmit}>LOGIN!</button>
                </div>
                {this.state.error &&
                    <p>{this.state.error}</p>
                }
                {this.state.logged === true &&
                    <Redirect to='/dashboard'/>
                }
            </>
        )
    }
}

export default Login;
