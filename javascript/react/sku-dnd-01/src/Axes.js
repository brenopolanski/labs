import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;

class Axes extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.axis.title}</Title>
        <Droppable droppableId={this.props.axis.id}>
          {(provided, snapshot) => (
            <ItemList
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.items.map((item, index) => (
                <Item key={item.id} id={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </ItemList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Axes;
