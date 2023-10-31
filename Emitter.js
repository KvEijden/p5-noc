class Emitter {
  constructor(pos) {
    this.position = pos.copy();
    this.particles = [];
  }
  
  emit(num, vel) {
    for (let i = 0; i < num; i++) {
      this.particles(new Particle(this.pos, vel));
    }
  }
  
  update() {
    let gravity = createVector(0, 0.2);
    for (let p of this.particles) {
      p.applyForce(gravity);
      p.update();
    }
    for (let i = particles.length - 1; i >= 0; i-- ) {
      if (particles[i].finished()) {
        particles.splice(i, 1);
      }
    }
  }
  
  show() {
    for (let p of this.particles) {
      p.show();
    }
  }
}