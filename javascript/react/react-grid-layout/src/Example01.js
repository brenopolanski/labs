import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import { Card, Icon } from 'antd';

class Example01 extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: 'a', x: 0, y: 0, w: 3, h: 6 },
      { i: 'b', x: 3, y: 0, w: 3, h: 5 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
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
        />
        <Card key="b" title="Default size card" size="small" extra={<a href="#">More</a>}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </GridLayout>
    )
  }
}

export default Example01;
