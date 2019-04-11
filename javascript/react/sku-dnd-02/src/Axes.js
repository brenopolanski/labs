import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

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

        <Droppable droppableId="rows" type="levels">
          {(provided, snapshot) => (

            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >

              {this.props.items.map((item, index) => {
                return (
                  <Draggable key={item.name} draggableId={item.name} index={index}>
                    {(provided, snapshot) => (

                      <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >

                      <h6>{item.name}</h6>
                      <Droppable key={item.name} droppableId={item.name} type="x">
                        {(provided, snapshot) => (
                          <ItemList
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                          >
                            {Object.keys(item.levels).map((level, index) => (
                              <p key={index}>{level}</p>
                            ))}
                            {provided.placeholder}
                          </ItemList>
                        )}
                      </Droppable>

                      </Container>

                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Container>

          )}
        </Droppable>

      </Container>
    );
  }
}

export default Axes;
