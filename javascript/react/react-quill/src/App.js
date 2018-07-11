import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import logo from './logo.svg';
import './App.css';
import 'react-quill/dist/quill.snow.css';

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ align: [] } ],
    [ 'bold', 'italic', 'underline', 'strike' ],
    [{ color: [] }, { background: [] }],
    [{ script: 'super' }, { script: 'sub' }],
    ['blockquote', 'code-block' ],
    [{ list: 'ordered' }, { list: 'bullet'}, { indent: '-1' }, { indent: '+1' }],
    [ 'link', 'image', 'video' ],
    [ 'clean' ]
  ]
};

class App extends Component {
  constructor(props) {
    super(props);

    this.modules = modules;
    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value);
    this.setState({ text: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container-notepad">
          <div className="notepad">
            <ReactQuill
              className="editor"
              value={this.state.text}
              modules={this.modules}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
