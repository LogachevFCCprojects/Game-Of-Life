import React, { Component } from 'react';

class Cell extends Component {
  state = {
    row: this.props.row,
    col: this.props.col
  };
  defaultProps = {
    clickHandler: undefined
  };
  cellClick = (e) => {
    this.props.clickHandler(this.state.row, this.state.col);
  };
  render() {
    let activeStyle = {
      backgroundColor: '#9cd4ee'
    };
    let defaultStyle = {
      backgroundColor: '#f5fbfe'
    };
    return (
      <div onClick={ this.cellClick } style={ (this.props.active) ? activeStyle : defaultStyle } />
      );
  }
}

export default Cell;
