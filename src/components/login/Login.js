import React from 'react';
import './Login.css';
import axios from 'axios';

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
        axios.post( `https://mycrm-api.herokuapp.com/login?name=${this.state.name}&password=${this.state.password}`)
            .then(function (res) {
                localStorage.setItem('token', res.data.token);
            })
            .catch(function (err) {
                console.log(err);
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
                <p>{this.state.errors}</p>
            </>
        )
    }
}

export default Login;
