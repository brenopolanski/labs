import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css-reset.css';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import initialData from './initialData';
import Fields from './Fields';
import Axes from './Axes';

// @import '/path/to/reset-css/reset.css';

const Container = styled.div`
  display: flex;
`;

class App extends Component {
  state = initialData;

  onDragEnd = () => {};

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          <Fields id="measureTree" title="Measure List" measures={this.state.measuresData} />

          {this.state.axesOrder.map(axisId => {
            const axis = this.state.axes[axisId];
            const items = axis.itemIds.map(
              itemId => this.state.measuresData[itemId]
            );

            return <Axes key={axis.id} axis={axis} items={items} />
          })}
        </Container>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
