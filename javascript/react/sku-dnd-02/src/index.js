// Packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

// Components
import FieldList from './FieldList';
import Axes from './Axes';

// Data
import initialData from './initialData';

// Styles
import './css-reset.css';

const Container = styled.div`
  display: flex;
`;

class App extends Component {
  state = initialData;

  onDragEnd = result => {
    const { source, destination, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    console.log('source:', source);
    console.log('destination:', destination);
    console.log(draggableId);
    console.log(type);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          <FieldList id="measureList" title="Measure List" measures={this.state.measuresData} />

          {this.state.axesOrder.map(axisId => {
            const axis = this.state.axes[axisId];

            console.log(axis);

            return <Axes key={axis.id} axis={axis} items={axis.items} />
          })}
        </Container>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
