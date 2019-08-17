import React, { Component } from 'react';
import { Card, Icon } from 'antd';

class Example06 extends Component {
  render() {
    return (
      <div style={{ background: '#ececec', padding: '30px' }}>
        <Card
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
          headStyle={{ backgroundColor: 'blue' }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default Example06;
