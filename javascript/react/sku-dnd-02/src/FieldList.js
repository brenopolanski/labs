// Packages
import React, { Component, Fragment } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

// Styles
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

const Item = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${props => (props.isDragging ? 'dashed #000' : 'solid #ddd')};
`;

const Clone = styled(Item)`
  ~ div {
    transform: none !important;
  }
`;

class FieldList extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Droppable droppableId={this.props.id} isDropDisabled={true} type="levels">
          {(provided, snapshot) => (
            <ItemList
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.measures.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={item.isDragDisabled || false}>
                  {(provided, snapshot) => (
                    <Fragment>
                      <Item
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        style={provided.draggableProps.style}
                      >
                        {item.name}
                      </Item>
                      {snapshot.isDragging && <Clone>{item.name}</Clone>}
                    </Fragment>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ItemList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default FieldList;
