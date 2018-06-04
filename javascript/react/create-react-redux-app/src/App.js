import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const {
      clickButton,
      newValue
    } = this.props;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input
          type="text"
          onChange={this.inputChange}
          value={this.state.inputValue}
        />
        <button onClick={ () => clickButton(this.state.inputValue) }>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

// Criamos o método mapDispatchToProps para converter a Action Creator clickButton
// que criamos no arquivo src/actions/index.js em uma prop para o componente.
// O método bindActionCreators nos auxilia neste trabalho.
// Ao clicar no botão Click me!, o valor do state inputValue que foi alterado
// pelo input text é enviado à Store pelo método clickButton,
// que foi mapeado no componente como prop.
const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
