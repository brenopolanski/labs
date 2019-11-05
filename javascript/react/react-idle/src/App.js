import React, { Component } from 'react';
import IdleTimer from 'react-idle-timer';

class App extends Component {
  constructor(props) {
    super(props)
    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
  }

  _onAction(e) {
    console.log('user did something', e)
  }

  _onActive(e) {
    console.log('user is active', e)
    console.log('time remaining', this.idleTimer.getRemainingTime())
  }

  _onIdle(e) {
    console.log('user is idle', e)
    console.log('last active', this.idleTimer.getLastActiveTime())
  }

  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
      onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
      debounce={250}
          timeout={10000} />
    {/* your app here */}
      </div>
    )
  }
}

export default App;
