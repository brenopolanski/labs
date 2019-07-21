import React, { Component, Fragment } from 'react';
import SteinStore from 'stein-js-client';

const store = new SteinStore(process.env.STEINHQ_API);

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    store.read('list1').then(data => this.setState({ data }));
  }

  handleAddRow = () => {
    const newData = [
      {
        name: `Another name - ${Date.now()}`,
        email: `Another email - ${Date.now()}`
      }
    ];

    store.append('list1', newData).then(res => console.log(res));
  };

  handleEditRow = () => {
    store.edit('list1', {
      search: { email: 'Another email - 1563733733721' },
      set: { email: 'Email Edited' }
    }).then(res => console.log(res));
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <ul>
          {data.map(row => (
            <Fragment key={row.name}>
              <li>{row.name}</li>
              <li>{row.email}</li>
            </Fragment>
          ))}
        </ul>
        <br />
        <button onClick={this.handleAddRow}>Add</button>
        <button onClick={this.handleEditRow}>Update</button>
      </div>
    );
  }
}

export default App;
