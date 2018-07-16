import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('/api/hello')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log('GET /api/hello:', json);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there, Neo!</h1>
        <p><small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small></p>
      </div>
    );
  }
}

export default App;
