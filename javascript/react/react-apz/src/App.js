import React, { Component } from 'react';
import ContactList from './containers/ContactList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">React Apz</a>
            </div>
          </div>
        </nav>
        <section className="container-fluid">
          <h2>Contacts Manager</h2>
          <div className="container">
            <ContactList />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
