import React, { Component } from 'react';
import { Tabs, TabList, Tab, PanelList, Panel, ExtraButton } from 'react-tabtab';
import { makeData } from './makeData';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const tabs = makeData(3);

    this.state = {
      tabs,
      activeIndex: 0
    };
  }

  handleExtraButton = () => {
    const {tabs} = this.state;
    const newTabs = [...tabs, {title: 'New Tab', content: 'New Content'}];
    this.setState({tabs: newTabs, activeIndex: newTabs.length - 1});
  }

  handleTabChange = (index) => {
    this.setState({activeIndex: index});
  }

  handleEdit = ({type, index}) => {
    this.setState((state) => {
      let {tabs, activeIndex} = state;
      if (type === 'delete') {
        tabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)];
      }
      if (index - 1 >= 0) {
        activeIndex = index - 1;
      } else {
        activeIndex = 0;
      }
      return {tabs, activeIndex};
    });
  }

  render() {
    const {tabs, activeIndex} = this.state;
    const tabTemplate = [];
    const panelTemplate = [];

    tabs.forEach((tab, i) => {
      const closable = tabs.length > 1;
      tabTemplate.push(<Tab key={i} closable={closable}>{tab.title}</Tab>);
      panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
    })
    return (
      <Tabs onTabEdit={this.handleEdit}
            onTabChange={this.handleTabChange}
            activeIndex={activeIndex}
            customStyle={this.props.customStyle}
            ExtraButton={
              <ExtraButton onClick={this.handleExtraButton}>
                <span>+</span>
              </ExtraButton>
            }>
        <TabList>
          {tabTemplate}
        </TabList>
        <PanelList>
          {panelTemplate}
        </PanelList>
      </Tabs>
    )
  }
}

export default App;
