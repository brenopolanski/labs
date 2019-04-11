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

const itemDisabled = (dataState, droppableSource) => {
  const dataClone = Array.from(dataState);

  dataClone[droppableSource.index]['isDragDisabled'] = true;

  return dataClone;
};

const copy = (data, axisState, droppableSource, droppableDestination) => {
  const dataClone = Array.from(data);
  const destinationClone = Array.from(axisState[droppableDestination.droppableId].items);
  const item = dataClone[droppableSource.index];

  destinationClone.splice(droppableDestination.index, 0, { ...item });

  const axis = {
    ...axisState[droppableDestination.droppableId],
    items: destinationClone
  };

  const newState = {
    ...axisState,
    [droppableDestination.droppableId]: {
      ...axis
    }
  };

  console.log(axis);
  console.log(newState);

  return newState;
};

const reorder = (items, axisState, droppableSource, droppableDestination) => {
  const startIndex = droppableSource.index;
  const endIndex = droppableDestination.index;
  const itemsClone = Array.from(items);
  const [removed] = itemsClone.splice(startIndex, 1);

  itemsClone.splice(endIndex, 0, removed);

  const axis = {
    ...axisState[droppableDestination.droppableId],
    items: itemsClone
  };

  const newState = {
    ...axisState,
    [droppableDestination.droppableId]: {
      ...axis
    }
  };

  console.log(itemsClone);

  return newState;
};

class App extends Component {
  state = initialData;

  onDragEnd = result => {
    const { source, destination, draggableId } = result;

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

    if (destination.droppableId === 'measures') {
      if (source.droppableId === destination.droppableId) {
        this.setState({
          axes: reorder(
            this.state.axes[source.droppableId].items,
            this.state.axes,
            source,
            destination
          )
        });
      } else {
        this.setState({
          measuresData: itemDisabled(
            this.state.measuresData,
            source
          ),
          axes: copy(
            this.state.measuresData,
            this.state.axes,
            source,
            destination
          )
        });
      }
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
