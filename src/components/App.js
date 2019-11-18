import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    toDashboard: localStorage.getItem('logged'),
  }
  render() {
    if (!this.state.toDashboard || this.state.toDashboard === false) {
      return <h1>Login {this.state.toDashboard}</h1>
    }

    return (
        <>
          <h1>Hello</h1>
        </>
    )
  }
}

export default App;
