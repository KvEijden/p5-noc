class Emitter {
  constructor(pos) {
    this.position = pos.copy();
    this.particles = [];
  }
  
  emit(num, vel) {
    for (let i = 0; i < num; i++) {
      let vel = createVector(random(-1,1), random(0, 1));
      this.particles.push(new Particle(this.position, vel));
    }
  }
  
  update() {
    let gravity = createVector(0, 0.2);
    for (let p of this.particles) {
      p.applyForce(gravity);
      p.update();
    }
    for (let i = this.particles.length - 1; i >= 0; i-- ) {
      if (this.particles[i].finished()) {
        this.particles.splice(i, 1);
      }
    }
  }
  
  show() {
    for (let p of this.particles) {
      p.show();
    }
  }
}