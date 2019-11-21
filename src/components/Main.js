import React from 'react';
import './Main.css';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token')
    }
    this.changeToken = this.changeToken.bind(this);
  }

  changeToken = (data) => {
    this.setState({token: data});
  };

  render() {
    if(this.state.token !== null) {
      return <Dashboard />
    }

    return <Login callback={this.changeToken}/>
  }
}

export default Main;
