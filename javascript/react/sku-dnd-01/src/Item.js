// Packages
import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

const Handle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  background: #fff;
  border-right: 1px solid #ddd;
  color: #000;
`;

class Item extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provided.dragHandleProps}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                />
              </svg>
            </Handle>
            {this.props.item.name}
            <button onClick={() => console.log(this.props.item.name)}>x</button>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Item;
