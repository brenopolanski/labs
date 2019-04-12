import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import initData from './initData';

// Styles
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './index.css';

export const Settings = {
  BASE_URL: 'http://localhost:8080',
  TOMCAT_WEBAPP: '/saiku',
  REST_MOUNT_POINT: '/rest/saiku',
  REST_URL: '/saiku/rest/saiku',
  COOKIE_NAME: 'SAIKU_SESSION_ID',
  MEASURES_GROUP_COLLAPSED: true,
  DIMENSION_SHOW_ALL: true,
  // Valid values for DIMENSION_HIDE_HIERARCHY:
  // 1) NONE
  // 2) SINGLE_LEVEL
  // 3) ALL
  DIMENSION_HIDE_HIERARCHY: 'SINGLE_LEVEL',
  QUERY_PROPERTIES: {
    'saiku.olap.query.automatic_execution': true,
    'saiku.olap.query.nonempty': true,
    'saiku.olap.query.nonempty.rows': true,
    'saiku.olap.query.nonempty.columns': true,
    'saiku.ui.render.mode': 'table',
    'saiku.olap.query.filter': true,
    'saiku.olap.result.formatter': 'flattened'
  },
  TABLE_LAZY: true, // Turn lazy loading off / on
  TABLE_LAZY_SIZE: 1000, // Initial number of items to be rendered
  TABLE_LAZY_LOAD_ITEMS: 20, // Additional item per scroll
  TABLE_LAZY_LOAD_TIME: 20 // Throttling call of lazy loading items
};

class TreeNode extends Component {
  state = {
    isExpanded: true
  };

  render() {
    const { dimension } = this.props;

    return (
      <li className="bp3-tree-node" onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}>
        <div className="bp3-tree-node-content">
          <span className={`bp3-tree-node-caret ${this.state.isExpanded ? 'bp3-tree-node-caret-open' : 'bp3-tree-node-caret-close'} bp3-icon-standard`}></span>
          <span
            className="bp3-tree-node-label"
            title={
              dimension.description
                ? dimension.description
                : dimension.caption
            }
          >
            {dimension.caption}
          </span>
        </div>
        <ul className={`bp3-tree-node-list ${this.state.isExpanded ? 'bp3-tree-node-expanded' : 'bp3-tree-node-hidden'}`}>
            {dimension.hierarchies.map(
              hierarchy =>
                (typeof hierarchy['visible'] === 'undefined' ||
                  hierarchy['visible']) &&
                ((Settings.DIMENSION_HIDE_HIERARCHY === 'NONE' &&
                  dimension.hierarchies.length > 1) ||
                (Settings.DIMENSION_HIDE_HIERARCHY === 'SINGLE_LEVEL' &&
                  ((Settings.DIMENSION_SHOW_ALL &&
                    hierarchy['levels'].length > 3) ||
                    (!Settings.DIMENSION_SHOW_ALL &&
                      hierarchy['levels'].length > 2))) ? (
                  <div
                    key={`${_.uniqueId(`${hierarchy.caption}_`)}`}
                  >
                    <li
                      key={`${_.uniqueId(`${hierarchy.caption}_`)}`}
                      title={
                        hierarchy.description
                          ? hierarchy.description
                          : hierarchy.caption
                      }
                      hierarchy={hierarchy.name}
                      className="bp3-tree-node"
                    >
                      <div className="bp3-tree-node-content">
                        <span className="bp3-tree-node-caret-none bp3-icon-standard"></span>
                        <span className="bp3-tree-node-icon bp3-icon-standard bp3-icon-dot"></span>
                        <span
                          className="bp3-tree-node-label"
                        >
                          {hierarchy.caption}
                        </span>
                      </div>
                    </li>
                    {hierarchy.levels.map(
                      level =>
                        (Settings.DIMENSION_SHOW_ALL ||
                          level.name !== '(All)') &&
                        (typeof level['visible'] === 'undefined' ||
                          level['visible']) && (
                          <li
                            key={`${_.uniqueId(`${level.caption}_`)}`}
                            className="bp3-tree-node"
                          >
                            <div className="bp3-tree-node-content">
                              <span className="bp3-tree-node-caret-none bp3-icon-standard"></span>
                              <a
                                title={
                                  (Settings.DIMENSION_HIDE_HIERARCHY ===
                                    'SINGLE_LEVEL' ||
                                    Settings.DIMENSION_HIDE_HIERARCHY ===
                                      'ALL') &&
                                  dimension.hierarchies.length > 1
                                    ? `${hierarchy.caption} - ${
                                        level.description
                                          ? level.description
                                          : level.caption
                                      }`
                                    : level.description
                                    ? level.description
                                    : level.caption
                                }
                                href={`#${encodeURIComponent(
                                  hierarchy.uniqueName
                                )}/${encodeURIComponent(level.name)}`}
                                level={level.name}
                                hierarchy={hierarchy.uniqueName}
                                className="bp3-tree-node-label"
                              >
                                {level.caption}
                              </a>
                            </div>
                          </li>
                        )
                    )}
                  </div>
                ) : (
                  hierarchy.levels.map(
                    level =>
                      (Settings.DIMENSION_SHOW_ALL || level.name !== '(All)') &&
                      (typeof level['visible'] === 'undefined' ||
                        level['visible']) && (
                        <li
                          key={`${_.uniqueId(`${level.caption}_`)}`}
                          className="bp3-tree-node"
                        >
                          <div className="bp3-tree-node-content">
                            <span className="bp3-tree-node-caret-none bp3-icon-standard"></span>
                            <a
                              title={
                                (Settings.DIMENSION_HIDE_HIERARCHY ===
                                  'SINGLE_LEVEL' ||
                                  Settings.DIMENSION_HIDE_HIERARCHY ===
                                    'ALL') &&
                                dimension.hierarchies.length > 1
                                  ? `${hierarchy.caption} - ${
                                      level.description
                                        ? level.description
                                        : level.caption
                                    }`
                                  : level.description
                                  ? level.description
                                  : level.caption
                              }
                              href={`#${encodeURIComponent(
                                hierarchy.uniqueName
                              )}/${encodeURIComponent(level.name)}`}
                              level={level.name}
                              hierarchy={hierarchy.uniqueName}
                            >
                              {level.caption}
                            </a>
                          </div>
                        </li>
                      )
                  )
                ))
            )}
        </ul>
      </li>
    );
  }
}

class App extends Component {
  state = initData;

  render() {
    const { dimensions } = this.state;

    return (
      <div className="bp3-tree">
        <ul className="bp3-tree-node-list bp3-tree-root">
          {dimensions.map(dimension => (
            dimension.name !== 'Measures' && (typeof dimension['visible'] === 'undefined' || dimension['visible']) && (
              <TreeNode key={`${_.uniqueId(`${dimension.caption}_`)}`} dimension={dimension} />
            )
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
