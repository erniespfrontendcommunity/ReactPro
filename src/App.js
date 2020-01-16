import React, {Component} from 'react';
import './App.css';
import Botonera from './botonera/botonera'
import Contador from './contador/contador'
import Imagen from './imagen/imagen'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Imagen />
          <Contador />
          <Botonera />
        </header>
      </div>
    );
  }
}

export default App;
