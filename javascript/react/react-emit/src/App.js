import React from 'react';
import ReactDOM from 'react-dom';

import Emitter from 'tiny-emitter';

var allItems = []
allItems.push("Buy ingredients for Crock Pot");
allItems.push("Pick up chair at IKEA");
allItems.push("Go see mom");


class Client {

    /**
     * Initiate the event emitter
     */
  constructor() {
    this.eventEmitter = new Emitter();
  }

    /**
     * Adds the @listener function to the end of the listeners array
     * for the event named @eventName
     * Will ensure that only one time the listener added for the event
     *
     * @param {string} eventName
     * @param {function} listener
     */
  on(eventName, listener) {
    console.log('oi');
    this.eventEmitter.on(eventName, listener);
  }

    /**
     * Will temove the specified @listener from @eventname list
     *
     * @param {string} eventName
     * @param {function} listener
     */
  removeEventListener(eventName, listener) {
    this.eventEmitter.removeListener(eventName, listener);
  }

  /**
   * Will emit the event on the evetn name with the @payload
   * and if its an error set the @error value
   *
   * @param {string} event
   * @param {object} payload
   * @param {boolean} error
   */
  emit(event, payload, error = false) {
    this.eventEmitter.emit(event, payload, error);
  }


    /**
     * Returns the event emitter
     * Used for testing purpose and avoid using this during development
     */
  getEventEmitter() {
    return this.eventEmitter;
  }
}

var client = new Client();

class App extends React.Component {
  state = {
    allItems: allItems
  };

  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
  }
  // Listen for event
  componentWillMount() {
    console.log('entrei');
    client.on('TODO_ADDED', this.addEvent);
  }

  componentWillUnmount(){
    client.removeListener('TODO_ADDED', this.addEvent);
  }

  render() {
    var items = this.props.items.map((item, key) => {
      return <li key={key}><TodoItem item={item} /></li>;
    })
    return(
      <div>
        <ul>{items}</ul>
        <div><NewTodoItem /></div>
      </div>
    );
  }
  addEvent({ newItem }){
    allItems.push(newItem);
    this.setState({ allItems });
  }
}

class TodoItem extends React.Component {
  render(){
    return <div>{this.props.item}</div>;
  }
}

class NewTodoItem extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.itemName).focus();
  }
  render(){
    return (<form onSubmit={this.onSubmit}>
      <input ref="itemName" type="text" />
    </form>);
  }
  onSubmit(event){
    event.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.itemName)
    var newItem = input.value;
    console.log(client);
    client.emit('TODO_ADDED', {newItem});
    input.value = '';
  }
}

export default App;
