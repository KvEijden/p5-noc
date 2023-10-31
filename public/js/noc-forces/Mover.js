class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass);
    
  }
  
  applyDrag(drag_coeff) {
    let drag_mag = pow(this.vel.mag(), 2) * drag_coeff;
    let drag_force = this.vel.copy();
    drag_force.normalize();
    // drag_force.mult(-1);
    drag_force.setMag(-1 * drag_mag);
    this.applyForce(drag_force);
  }
  
  applyForce(f) {
    f.div(this.mass);
    this.acc.add(f);
  }
  
  update() {
    this.vel.add(this.acc);
    let new_pos = p5.Vector.add(this.vel, this.pos);
    this.pos.add(this.vel);
    this.checkEdges();
    this.acc.mult(0);
  }
  
  checkEdges() {
    if (this.pos.x < 0 + this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 + this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
  }
  
  draw() {
    push();
    translate(this.pos);
    fill('coral');
    noStroke();
    circle(0, 0, 2 * this.r);
    pop();
  }
  
  dseek(dpos) {
    this.seek(p5.Vector.add(this.pos, dpos));
  }
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let force = p5.Vector.sub(desired, this.vel);
    this.applyForce(force);
  }
}