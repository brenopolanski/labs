import React, { Component } from 'react';
import { Tabs, DragTabList, DragTab, PanelList, Panel } from 'react-tabtab';
import { simpleSwitch } from './move';
import { makeData } from './makeData';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTabSequenceChange = this.handleTabSequenceChange.bind(this);
    const tabs = makeData(3, 'DragTab');
    this.state = {
      activeIndex: 0,
      tabs
    }
  }

  handleTabChange(index) {
    this.setState({activeIndex: index});
  }

  handleTabSequenceChange({oldIndex, newIndex}) {
    const {tabs} = this.state;
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);
    this.setState({tabs: updateTabs, activeIndex: newIndex});
  }

  render() {
    const {tabs, activeIndex} = this.state;
    const tabsTemplate = [];
    const panelTemplate = [];
    tabs.forEach((tab, index) => {
      tabsTemplate.push(<DragTab key={index}>{tab.title}</DragTab>)
      panelTemplate.push(<Panel key={index}>{tab.content}</Panel>)
    })
    return (
      <Tabs activeIndex={activeIndex}
            onTabChange={this.handleTabChange}
            onTabSequenceChange={this.handleTabSequenceChange}
            customStyle={this.props.customStyle}>
        <DragTabList>
          {tabsTemplate}
        </DragTabList>
        <PanelList>
          {panelTemplate}
        </PanelList>
      </Tabs>
    )
  }
}

export default App;
