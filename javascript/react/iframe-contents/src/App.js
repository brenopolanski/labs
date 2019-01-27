import React, { Component } from 'react';
import Iframe from 'react-iframe';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import elementReady from 'element-ready';

import './App.css';

class App extends Component {

  componentDidMount() {
    const iframe = ReactDOM.findDOMNode(this.refs.iframe);
    iframe.addEventListener('load', this.onLoad);

    // $('#iframe').contents().find('#someDiv').removeClass('hidden');
    // $('#iframe').contents().find('body').html('Hey, i\'ve changed content of <body>! Yay!!!');
  }

  onLoad(e) {
    // console.log(e);
    // $('#iframe').contents().find('body').html('Hey, i\'ve changed content of <body>! Yay!!!');
    // $(e.path[0]).contents().find('body').html('Hey, i\'ve changed content of <body>! Yay!!!');

    // setTimeout(() => console.log($('#iframe').find('body')), 5000);
    // Error: SecurityError: Blocked a frame with origin "http://localhost:3000" from accessing a cross-origin frame
    console.log($('#iframe')[0].contentWindow.document);
  }

  render() {
    return (
      <div className="App">
        <Iframe url="http://localhost:8080/"
          width="450px"
          height="450px"
          id="iframe"
          ref="iframe"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default App;
