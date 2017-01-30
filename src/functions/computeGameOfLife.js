import settings from './settings';

const computeGameOfLife = (immutableList) => {
  let nextBoard = immutableList;

  let neighbours = [];

  let countNeighbours = (r, c) => {
    let accumulator = 0,
      tempBoard = immutableList;
    accumulator += tempBoard.getIn([r - 1 - settings.rows, c - 1 - settings.cols]);
    accumulator += tempBoard.getIn([r - 1 - settings.rows, c - settings.cols]);
    accumulator += tempBoard.getIn([r - 1 - settings.rows, c + 1 - settings.cols]);
    accumulator += tempBoard.getIn([r - settings.rows, c - settings.cols - 1]);
    accumulator += tempBoard.getIn([r - settings.rows, c - settings.cols + 1]);
    accumulator += tempBoard.getIn([r - settings.rows + 1, c - settings.cols - 1]);
    accumulator += tempBoard.getIn([r - settings.rows + 1, c - settings.cols]);
    accumulator += tempBoard.getIn([r - settings.rows + 1, c - settings.cols + 1]);
    return accumulator;
  }

  nextBoard = nextBoard.map((row, r) => row.map((col, c) => {
    // save state
    if ((col === 1) && (countNeighbours(r, c) === 2)) return 1;
    if ((col === 1) && (countNeighbours(r, c) === 3)) return 1;
    // die
    if (col === 1) return 0;
    // born
    if ((col === 0) && (countNeighbours(r, c) === 3)) return 1;
    //empty alone
    return 0;
  }));
  return nextBoard;
}

export default computeGameOfLife;