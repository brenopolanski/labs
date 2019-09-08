import React, { Component } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { Card, Icon } from 'antd';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Example02 extends Component {
  render() {
    return (
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <Card
          key="a"
          title="Default size card"
          size="small"
          extra={<Icon type="edit" key="edit" />}
          headStyle={{ backgroundColor: 'blue', color: 'white' }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          data-grid={{ i: 'a', x: 0, y: Infinity, w: 3, h: 3 }}
        />
        <Card
          key="b"
          title="Default size card"
          size="small"
          extra={<a href="#">More</a>}
          data-grid={{ i: 'b', x: 3, y: Infinity, w: 3, h: 3 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </ResponsiveReactGridLayout>
    )
  }
}

export default Example02;
