import React, { Component } from 'react';
import logo from './logo.svg';
import ReactTable from 'react-table';
import './App.css';
import 'react-table/react-table.css';

import { makeData } from './Utils';

const x = [1, 2, 3];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                },
                {
                  Header: "Actions",
                  Cell: (d) => (x.map(v => <span className="number" style={{ padding: '5px', backgroundColor: '#ccc', marginLeft: '5px' }} key={v}>{d.row._index}</span>))
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default App;
