import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import initData from './initData';

// Styles
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './index.css';

const MEASURES_GROUP_COLLAPSED = true;

class TreeNode extends Component {
  state = {
    isExpanded: MEASURES_GROUP_COLLAPSED
  };

  render() {
    const { measuresGroup, mGroup } = this.props;

    return (
      <li className="bp3-tree-node" onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}>
        <div className="bp3-tree-node-content">
          <span className={`bp3-tree-node-caret ${this.state.isExpanded ? 'bp3-tree-node-caret-open' : 'bp3-tree-node-caret-close'} bp3-icon-standard`}></span>
          <span className="bp3-tree-node-label" title={mGroup}>{mGroup}</span>
        </div>
        <ul className={`bp3-tree-node-list ${this.state.isExpanded ? 'bp3-tree-node-expanded' : 'bp3-tree-node-hidden'}`}>
          {measuresGroup[mGroup].map(measure =>
            (typeof measure['visible'] === 'undefined' ||
              measure['visible']) && (
              <li key={`${_.uniqueId(`${measure.caption}_`)}`} className="bp3-tree-node">
                <div className="bp3-tree-node-content">
                  <span className="bp3-tree-node-caret-none bp3-icon-standard"></span>
                  <a
                    className="bp3-tree-node-label"
                    title={
                      measure.description
                        ? measure.description
                        : measure.uniqueName
                    }
                    href={`#Measures/member/${encodeURIComponent(
                      measure.uniqueName
                    )}`}
                    measure={measure.name}
                    type="EXACT"
                  >
                    {measure.caption}
                  </a>
                </div>
              </li>
            )
          )}
        </ul>
      </li>
    );
  }
}

class App extends Component {
  state = initData;

  render() {
    const { measures } = this.state;
    const measuresGroup = _.groupBy(measures, 'measureGroup');

    return (
      <div className="bp3-tree">
        <ul className="bp3-tree-node-list bp3-tree-root">
          {Object.keys(measuresGroup).map(key => (
            <TreeNode key={`${_.uniqueId(`${key}_`)}`} measuresGroup={measuresGroup} mGroup={key} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
