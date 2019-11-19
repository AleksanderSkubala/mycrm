import React from 'react';
import './Main.css';
import { Redirect } from 'react-router-dom'
import Login from './login/Login';

class Main extends React.Component {

  render() {
    if(localStorage.getItem('token') !== null) {
      return <Redirect to='/dashboard' />
    }

    return <Login/>
  }
}

export default Main;
