// returns a 2D Immutable List,
// filled with either 0 or 1. 

const randomizeBoard = (immutableList) => {
  return immutableList.map((cols) => cols.map(() => (Math.round(Math.random()))));
}

export default randomizeBoard;