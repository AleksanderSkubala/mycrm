import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'
import Login from './login/Login';

class App extends React.Component {

  render() {
    if(localStorage.getItem('token') !== null) {
      return <Redirect to='/dashboard' />
    }

    return <Login/>
  }
}

export default App;
