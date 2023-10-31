class Wave {
  constructor(amplitude, period, phase) {
    this.amplitude = amplitude;
    this.period    = period;
    this.phase     = phase;
    this.res = 4;
  }
  
  update() {
    // do nothing for the moment
    this.phase += 1 / this.period // 0.005;
  }
  
  evaluate(x) {
    return sin(this.phase + (TWO_PI * x) / this.period);
  }
  
}