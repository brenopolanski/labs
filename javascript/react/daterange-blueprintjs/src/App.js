import React, { Component } from 'react';
import { DateRangeInput } from '@blueprintjs/datetime';
import moment from 'moment';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

class App extends Component {
  state = {
    startDate: null,
    endDate: null
  };

  handleRangeChange = ([startDate, endDate]) => {
    console.log(startDate);
    console.log(endDate);

    if (startDate) {
      console.log('startDate');
      this.setState({ startDate });
    }

    if (endDate) {
      console.log('endDate');
      this.setState({ endDate });
    }
  };

  render() {
    return (
      <DateRangeInput
        formatDate={date => date.toLocaleString()}
        parseDate={str => new Date(str)}
        value={[this.state.startDate, this.state.endDate]}
        onChange={this.handleRangeChange}
      />
    );
  }
}

export default App;
