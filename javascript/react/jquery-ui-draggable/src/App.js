import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable.js';
import 'jquery-ui/ui/widgets/droppable.js';

class App extends Component {
  componentDidMount() {
    this.$node = $('.item');

    this.$node.draggable({
      cancel      : '.not-draggable',
      helper      : 'clone',
      opacity     : 0.60,
      placeholder : 'placeholder',
      scroll      : false,
      tolerance   : 'touch',
      cursorAt    : { top: 10, left: 85 },
      start: (event, ui) => {
        console.log('====== draggable =========');
        console.log(event);
        console.log(ui);
        console.log('====== end draggable =========');
      }
    });

    $('.drop').droppable({
      accept: '.item',
      hoverClass: 'over',
      drop: (event, ui) => {
        console.log('====== droppable =========');
        console.log(event);
        console.log(ui);
        console.log('====== end droppable =========');
      }
    });
  }

  render() {
    return (
      <Fragment>
        <ul>
          <li className="item">Brazil</li>
          <li className="item">EUA</li>
          <li className="item">England</li>
          <li className="item">Japan</li>
          <li className="item">Chine</li>
        </ul>
        <div
          className="drop"
          style={{
            width: '200px',
            height: '200px',
            border: '1px solid #000'
          }}
        />
      </Fragment>
    );
  }
}

export default App
