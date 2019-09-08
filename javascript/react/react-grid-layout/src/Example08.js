import React, { Component } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import _ from 'lodash';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class Example07 extends Component {
  static defaultProps = {
    className: 'layout',
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };

  constructor(props) {
    super(props);

    // main layout
    this.state = {
      items: [
        {
          i: '1',
          x: 0,
          y: 0,
          w: 6,
          h: 2
        },
        {
          i: '2',
          x: 6,
          y: 0,
          w: 6,
          h: 2
        },
        {
          i: '3',
          x: 0,
          y: 2,
          w: 6,
          h: 2
        },
        {
          i: '4',
          x: 6,
          y: 2,
          w: 6,
          h: 2
        }
      ],
      layouts: {}
      // layouts: {
      //   lg: [
      //     {
      //       w: 12,
      //       h: 3,
      //       x: 0,
      //       y: 0,
      //       i: '1',
      //       moved: false,
      //       'static': false
      //     },
      //     {
      //       w: 6,
      //       h: 2,
      //       x: 6,
      //       y: 3,
      //       i: '2',
      //       moved: false,
      //       'static': false
      //     },
      //     {
      //       w: 6,
      //       h: 2,
      //       x: 0,
      //       y: 3,
      //       i: '3',
      //       moved: false,
      //       'static': false
      //     },
      //     {
      //       w: 12,
      //       h: 1,
      //       x: 0,
      //       y: 5,
      //       i: '4',
      //       moved: false,
      //       'static': false
      //     }
      //   ]
      // }
    };
  }

  createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };

    const { i } = el;

    return (
      <div key={i} data-grid={el}>
        <span className="text">{i}</span>
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          x
        </span>
      </div>
    );
  }

  onLayoutChange = (layout, layouts) => {
    console.log(layout);
    console.log(JSON.stringify(layout));
    console.log('==========================================');
    console.log(layouts);
    console.log(JSON.stringify(layouts));
    this.setState({ layout });
  };

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange = (breakpoint, cols) => {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  };

  onRemoveItem = i => {
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  };

  render() {
    return (
      <div>
        <button onClick={this.onAddItem}>Add Item</button>

        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          layouts={this.state.layouts}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default Example07;
