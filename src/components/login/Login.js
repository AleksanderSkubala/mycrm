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
        axios.post( `https://mycrm-api.herokuapp.com/login?name=${this.refs.name.value}&password=${this.refs.password.value}`)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.callback(res.data.token);
            })
            .catch((err) => {
                this.setState({error: err.response.data.info.message});
            });
    }

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <div className="login__form" ref={this.listRef}>
                    <input
                        type="text"
                        name="name"
                        ref="name"
                        placeholder="Name"
                    />
                    <input
                        type="password"
                        name="password"
                        ref="password"
                        placeholder="Password"
                    />
                    <button onClick={this.handleSubmit}>
                        <span>LOGIN!</span>
                    </button>
                </div>
                {this.state.error &&
                    <p className="login__errors">{this.state.error}</p>
                }
            </div>
        )
    }
}

export default Login;
