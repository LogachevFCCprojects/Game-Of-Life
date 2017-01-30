import React, { Component } from 'react';

import './styles/App.css';
import Board from './Board';

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
