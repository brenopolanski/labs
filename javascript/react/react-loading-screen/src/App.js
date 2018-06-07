import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const el = document.getElementById('ipl-progress-indicator');

      if (el) {
        el.classList.add('available');

        setTimeout(() => {
          // remove from DOM
          el.outerHTML = '';
        }, 2000);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
