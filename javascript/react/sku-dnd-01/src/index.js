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
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    console.log('source:', source);
    console.log('destination:', destination);
    console.log(draggableId);

    if (destination.droppableId === 'measures') {
      const measureDrop = this.state.measuresData[source.index];

      console.log(measureDrop);

      return;
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          <FieldList id="measureList" title="Measure List" measures={this.state.measuresData} />

          {this.state.axesOrder.map(axisId => {
            const axis = this.state.axes[axisId];
            const items = axis.items.map(
              item => this.state.measuresData.find(measure => measure.id === item.id)
            );

            return <Axes key={axis.id} axis={axis} items={items} />
          })}
        </Container>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
