import Immutable from 'immutable';

const createEmptyBoard = (rows, cols) => {
  let arr = Array(rows).fill(0).map(() => Array(cols).fill(0));
  return Immutable.fromJS(arr);
}

export default createEmptyBoard;