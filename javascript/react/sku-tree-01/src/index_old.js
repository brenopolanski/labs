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
    isExpanded: !MEASURES_GROUP_COLLAPSED
  };

  render() {
    const { measuresGroup, mGroup } = this.props;

    return (
      <li onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}>
        <span title={mGroup}>{mGroup}</span>
        <ul className={this.state.isExpanded ? 'tree-node-expanded' : 'tree-node-hidden'}>
          {measuresGroup[mGroup].map(measure =>
            (typeof measure['visible'] === 'undefined' ||
              measure['visible']) && (
              <li key={`${_.uniqueId(`${measure.caption}_`)}`}>
                <a
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
      <ul>
        {Object.keys(measuresGroup).map(key => (
          <TreeNode key={`${_.uniqueId(`${key}_`)}`} measuresGroup={measuresGroup} mGroup={key} />
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
