import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <TaskList {...provided.droppableProps} innerRef={provided.innerRef}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} id={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Column;
