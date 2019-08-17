import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { Card, Icon } from 'antd';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
class Example05 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    };
  }

  static get defaultProps() {
    return {
      className: 'layout',
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    // saveToLS('layouts', layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout
          className='layout'
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
          containerPadding={[30, 30]}
          compactType="horizontal"
          autoSize
          verticalCompact
        >
          <Card
            key="a"
            title={<span><Icon type="edit" key="edit" /> Widget Title</span>}
            size="small"
            extra={<a href='#'>More</a>}
            data-grid={{ x: 0, y: 0, w: 6, h: 2, minW: 2 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card
            key="b"
            title="Default size card"
            size="small"
            extra={<a href='#'>More</a>}
            data-grid={{ x: 5, y: 0, w: 6, h: 2, minW: 2 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default Example05;

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value
      })
    );
  }
}
