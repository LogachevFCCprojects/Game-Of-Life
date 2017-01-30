let perf = {
  _numbers: [],
  _t0: 0,
  start() {
    this._t0 = performance.now();
  },
  stop() {
    this._numbers.push(performance.now() - this._t0);
  },
  show() {
    this._numbers.sort();
    console.log('Median time', this._numbers[Math.ceil(this._numbers.length / 2)].toFixed(), 'milliseconds');
    this.numbers = [];
    console.log()
  }
}

export default perf;