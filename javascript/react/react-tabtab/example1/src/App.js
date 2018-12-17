import React, { Component } from 'react';
import {
  Tabs,
  DragTabList,
  DragTab,
  PanelList,
  Panel,
  ExtraButton
} from 'react-tabtab';
import { simpleSwitch } from './move';
// import { makeData } from './makeData';
import customStyle from './theme';

import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);

    // const tabs = makeData(1, 'Drag');
    const tabs = [];

    this.state = {
      tabs,
      activeIndex: 0
    };
  }

  handleExtraButton = () => {
    const { tabs } = this.state;
    const newTabs = [
      ...tabs,
      { title: 'New Draggable Tab', content: <Content /> }
    ];

    this.setState({ tabs: newTabs, activeIndex: newTabs.length - 1 });
  };

  handleTabChange = index => {
    this.setState({ activeIndex: index });
  };

  handleTabSequenceChange = ({ oldIndex, newIndex }) => {
    const { tabs } = this.state;
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);

    this.setState({ tabs: updateTabs, activeIndex: newIndex });
  };

  handleEdit = ({ type, index }) => {
    this.setState(state => {
      let { tabs, activeIndex } = state;

      if (type === 'delete') {
        tabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)];
      }
      if (index - 1 >= 0) {
        activeIndex = index - 1;
      } else {
        activeIndex = 0;
      }

      return { tabs, activeIndex };
    });
  };

  render() {
    const { tabs, activeIndex } = this.state;
    const tabTemplate = [];
    const panelTemplate = [];

    tabs.forEach((tab, i) => {
      const closable = tabs.length > 1;

      tabTemplate.push(
        <DragTab key={i} closable={closable}>
          {tab.title}
        </DragTab>
      );
      panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
    });

    return (
      <div>
        <Tabs
          onTabEdit={this.handleEdit}
          onTabChange={this.handleTabChange}
          activeIndex={activeIndex}
          onTabSequenceChange={this.handleTabSequenceChange}
          showModalButton={true}
          showArrowButton={true}
          ExtraButton={
            true && (
              <ExtraButton onClick={this.handleExtraButton}>
                <span>+</span>
              </ExtraButton>
            )
          }
          customStyle={customStyle}
        >
          <DragTabList>{tabTemplate}</DragTabList>
          <PanelList>{panelTemplate}</PanelList>
        </Tabs>
      </div>
    );
  }
}

export default App;
