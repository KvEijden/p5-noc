class Boid {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D(); // createVector(0, 0);
    this.acc = createVector(0, 0);
    this.max_speed = 4;
    this.max_force = 0.04;
    this.r         = 16;
    this.mass      = 1;
  }
  
  pursue(vehicle) {
    let target = vehicle.pos.copy();
    let prediction = vehicle.vel.copy();
    prediction.mult(30);
    target.add(prediction);
    
    // show prediction
    fill('blue');
    circle(target.x, target.y, 15);
    
    return this.seek(target);
  }
  
  hit_by(vehicle) {
    let distance = p5.Vector.dist(this.pos, vehicle.pos);
    if ( distance < this.r + vehicle.r) {
      return true;
    }
    return false;
  }
  
  arrive(target) {
    return this.seek(target, true);  // arrive at target
  }
  
  seek(target, arrive = false) {
    let force = p5.Vector.sub(target, this.pos);
    let desired_speed = this.max_speed;
    if (arrive) {
      let slow_radius = 300;
      let distance = force.mag();
      if (distance < slow_radius) {
        desired_speed = map(distance, 0, slow_radius, 0, this.max_speed);
      }
    }
    force.setMag(desired_speed);
    force.sub(this.vel);
    force.limit(this.max_force);
    return force;
  }
  
  flee(target) {
    return this.seek(target).mult(-1);
  }
  
  applyForce(force) {

    this.acc.add(force.div(this.mass));
  }
  
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.max_speed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill('green');
    push();
    translate(this.pos);
    rotate(this.vel.heading());
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    pop();
  }
}

class Target extends Boid {
  constructor(x, y, moving = true) {
    super(x, y);
    if (moving) {
      this.vel = p5.Vector.random2D();
      this.vel.mult(2);
    } else {
      this.vel = createVector(0, 0);
    }
  }
  
  edges() {
    if (this.pos.x > width - this.r) {
      this.vel.x *= -1;
      this.pos.x = width -this.r;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    } else if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill('coral');
    push();
    translate(this.pos);
    circle(0, 0, 2 * this.r);
    pop();
  }
}