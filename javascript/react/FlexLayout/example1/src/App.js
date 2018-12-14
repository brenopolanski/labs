import React, { Component } from 'react';
import FlexLayout from 'flexlayout-react';
import './App.css';
import 'flexlayout-react/style/dark.css';

const json = {
  global: {},
  borders: [],
  layout:{
    "type": "row",
    "weight": 100,
    "children": [
      {
        "type": "tabset",
        "weight": 50,
        "selected": 0,
        "children": [
          {
            "type": "tab",
            "name": "FX",
            "component":"grid",
          }
        ]
      },
      {
        "type": "tabset",
        "weight": 50,
        "selected": 0,
        "children": [
          {
            "type": "tab",
            "name": "FI",
            "component":"grid",
          }
        ]
      }
    ]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: FlexLayout.Model.fromJson(json)
    };
  }

  factory(node) {
      const component = node.getComponent();

      if (component === 'button') {
        return <button>{node.getName()}</button>;
      }
  }

  render() {
    return (
      <div className="App">
        <FlexLayout.Layout model={this.state.model} factory={this.factory.bind(this)}/>
      </div>
    );
  }
}

export default App;
