import React, { Component } from 'react';
import { Card, Icon } from 'antd';

class Example06 extends Component {
  render() {
    return (
      <div style={{ background: '#fff', padding: '30px' }}>
        <Card
          size="small"
          title={<span><Icon type="edit" key="edit" style={{ color: 'yellow' }} /> <span style={{ color: 'yellow', fontWeight: 'bold' }}>Sales</span></span>}
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
          headStyle={{ backgroundColor: '#fff', borderBottom: 'none' }}
          bodyStyle={{ backgroundColor: '#ccc' }}
          bordered={true}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <br />

        <Card
          size="small"
          title={<span><Icon type="edit" key="edit" style={{ color: 'yellow' }} /> <span style={{ color: 'yellow', fontWeight: 'bold' }}>Sales</span></span>}
          extra={<a href="#">More</a>}
          style={{ width: 300, border: '2px solid blue' }}
          headStyle={{ backgroundColor: '#fff', borderBottom: 'none' }}
          bodyStyle={{ backgroundColor: '#fff' }}
          bordered={true}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <br />

        <Card
          style={{ width: 300, border: '2px solid blue' }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          bodyStyle={{ padding: 0 }}
        />
      </div>
    );
  }
}

export default Example06;
