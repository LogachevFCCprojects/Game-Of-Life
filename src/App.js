import React, { Component } from 'react';
import EventEmitter from 'wolfy87-eventemitter';

import './styles/App.css';
// import Controls from './Controls';
import Board from './Board';

window.ee = new EventEmitter()

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Game Of Life</h2>
        <Board />
      </div>
      );
  }
}

export default App;
