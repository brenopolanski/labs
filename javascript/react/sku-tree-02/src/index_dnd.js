import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import initData from './initData';
import styled from 'styled-components';

// Styles
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './index.css';

const ItemList = styled.div``;

const Item = styled.div`
  background-color: ${props => (props.isDragging ? 'blue' : 'inherit')};
`;

const Clone = styled(Item)`
  ~ div {
    transform: none !important;
  }
`;

const MEASURES_GROUP_COLLAPSED = true;

class TreeNode extends Component {
  state = {
    isExpanded: MEASURES_GROUP_COLLAPSED
  };

  render() {
    const { measuresGroup, mGroup } = this.props;

    return (
      <Droppable droppableId={`${_.uniqueId(`${mGroup}_`)}`} isDropDisabled={true}>
        {(provided, snapshot) => (
          <ItemList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <li
              className="bp3-tree-node"
              onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}
            >
              <div className="bp3-tree-node-content mgroup">
                <span className={`bp3-tree-node-caret ${this.state.isExpanded ? 'bp3-tree-node-caret-open' : 'bp3-tree-node-caret-close'} bp3-icon-standard`}></span>
                <span className="bp3-tree-node-label" title={mGroup}>{mGroup}</span>
              </div>
              <ul className={`bp3-tree-node-list ${this.state.isExpanded ? 'bp3-tree-node-expanded' : 'bp3-tree-node-hidden'}`}>
                {measuresGroup[mGroup].map((measure, index) =>
                  (typeof measure['visible'] === 'undefined' ||
                    measure['visible']) && (
                    <Draggable key={measure.uniqueName} draggableId={measure.uniqueName} index={index}>
                      {(provided, snapshot) => (
                        <React.Fragment>
                          <Item
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            isDragging={snapshot.isDragging}
                            style={provided.draggableProps.style}
                          >
                            <li
                              key={`${_.uniqueId(`${measure.caption}_`)}`}
                              className="bp3-tree-node"
                            >
                              <div className="bp3-tree-node-content">
                                <span className="bp3-tree-node-caret-none bp3-icon-standard"></span>
                                <span
                                  className="bp3-tree-node-label"
                                  title={
                                    measure.description
                                      ? measure.description
                                      : measure.uniqueName
                                  }
                                  measure={measure.name}
                                  type="EXACT"
                                >
                                  {measure.caption}
                                </span>
                              </div>
                            </li>
                          </Item>
                          {snapshot.isDragging && (
                            <Clone>
                              <li
                                key={`${_.uniqueId(`${measure.caption}_`)}`}
                                className="bp3-tree-node"
                              >
                                <div className="bp3-tree-node-content">
                                  <span className="bp3-tree-node-caret-none bp3-icon-standard"></span>
                                  <span
                                    className="bp3-tree-node-label"
                                    title={
                                      measure.description
                                        ? measure.description
                                        : measure.uniqueName
                                    }
                                    measure={measure.name}
                                    type="EXACT"
                                  >
                                    {measure.caption}
                                  </span>
                                </div>
                              </li>
                            </Clone>
                          )}
                        </React.Fragment>
                      )}
                    </Draggable>
                  )
                )}
              </ul>
            </li>
            {/*{provided.placeholder}*/}
            {provided.placeholder}
          </ItemList>
        )}
      </Droppable>
    );
  }
}

class App extends Component {
  state = initData;

  onDragEnd = result => {
    console.log(result);
  };

  render() {
    const { measures } = this.state;
    const measuresGroup = _.groupBy(measures, 'measureGroup');

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="bp3-tree">
          <ul className="bp3-tree-node-list bp3-tree-root">
            {Object.keys(measuresGroup).map(key => (
              <TreeNode key={`${_.uniqueId(`${key}_`)}`} measuresGroup={measuresGroup} mGroup={key} />
            ))}
          </ul>
        </div>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
