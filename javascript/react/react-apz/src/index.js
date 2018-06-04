import React from 'react';
import ReactDOM from 'react-dom';
import { Proviver } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Proviver store={store}>
    <App />
  </Proviver>,
  document.getElementById('root')
);
