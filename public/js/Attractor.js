class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }
  
  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 10 ,10000);
    let strength = (this.mass * mover.mass) / distanceSq;
    let G = 5.0;
    force.setMag(G * strength);
    mover.applyForce(force);
  }
  
  draw() {
    push();
    translate(this.pos);
    fill('coral');
    noStroke();
    circle(0, 0, 2 * this.r);
    pop();
  }
  
}