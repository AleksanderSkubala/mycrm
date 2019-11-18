import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'

class App extends React.Component {
  render() {
    if(localStorage.getItem('token') === null) {
      return (<Redirect to='/dashboard' />)
    }

    return (
        <>
          <h1>Login</h1>
        </>
    )
  }
}

export default App;
