import React, { Component } from 'react';
import Cell from './Cell'; //CELL
import './styles/Board.css';

import createEmptyBoard from './functions/createEmptyBoard';
import randomizeBoard from './functions/randomizeBoard';
import computeGameOfLife from './functions/computeGameOfLife';
import settings from './functions/settings';


class Board extends Component {
  state = {
    gameboard: createEmptyBoard(settings.rows, settings.cols),
    generations: 0
  };

  gameTime = {
    isRunning: false,
    start: () => {
      if (!this.gameTime.isRunning) {
        this.gameTime._timer = setInterval(this.gameLifecycle, settings.interval);
        this.gameTime.isRunning = true;
      }
    },
    stop: () => {
      clearInterval(this.gameTime._timer);
      this.gameTime.isRunning = false;
    }
  }

  componentDidMount() {
    this.randomizeGame();
    this.startGame();
  }

  gameLifecycle = () => {
    if (this.gameTime.isRunning) {
      this.setState({
        gameboard: computeGameOfLife(this.state.gameboard),
        generations: this.state.generations + 1
      });
    }
  };

  startGame = () => {
    this.gameTime.start();
  };

  pauseGame = () => {
    this.gameTime.stop();
    this.setState();
  };

  clearGame = () => {
    this.gameTime.stop();
    this.setState({
      gameboard: createEmptyBoard(settings.rows, settings.cols),
      generations: 0
    });
  };

  randomizeGame = () => {
    this.gameTime.stop();
    this.setState({
      gameboard: randomizeBoard(createEmptyBoard(settings.rows, settings.cols)),
      generations: this.state.generations + 1
    });
  };

  toggleCellValue = (row, col) => {
    let nextValue = this.state.gameboard.getIn([row, col]);
    nextValue = (nextValue) ? 0 : 1;
    let nextBoard = this.state.gameboard.setIn([row, col], nextValue);
    this.setState({
      gameboard: nextBoard
    });
  }

  render() {
    let template = this.state.gameboard.map((row, rowNumber) => {
      let activeStyle = {
        backgroundColor: '#9cd4ee'
      };
      let templateRow = row.map((col, colNumber) => {
        if (this.gameTime.isRunning) {
          return (<div key={ colNumber } style={ (col === 1) ? activeStyle : null } />)
        } else {
          return (<Cell key={ colNumber } row={ rowNumber } col={ colNumber } active={ col } clickHandler={ this.toggleCellValue } />)
        }
      });
      return (
        <div className="row" key={ rowNumber }>
          { templateRow }
        </div>
      )
    });
    return (
      <div>
        <div className="controls">
          { this.gameTime.isRunning && <a className="controls__pause" onClick={ this.pauseGame }>Pause</a> }
          { this.gameTime.isRunning || <a className="controls__start" onClick={ this.startGame }>Start</a> }
          <a className="controls__clear" onClick={ this.clearGame }>Clear</a>
          <a className="controls__randomize" onClick={ this.randomizeGame }>Randomize</a>
          { this.state.generations && (<span>Generation: { this.state.generations }</span>) }
        </div>
        <div className="board" onClick={ this.gameTime.isRunning ? this.pauseGame : null }>
          { template }
        </div>
      </div>
      );
  }
}

export default Board;