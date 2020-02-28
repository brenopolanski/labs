import React from 'react';
import { Navbar } from 'react-bootstrap';
import { KeywordStore } from './store';
import HomePage from './HomePage';
import './App.css';

const keywordStore = new KeywordStore();

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Weather App</Navbar.Brand>
      </Navbar>
      <HomePage keywordStore={keywordStore} />
    </div>
  );
}

export default App;
