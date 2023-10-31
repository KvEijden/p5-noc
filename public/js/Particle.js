class Particle extends p5.Vector{
  constructor(pos, vel) {
    super(pos.x, pos.y);
    this.vel = vel.copy();
    this.acc = createVector(0, 0);
    this.r   = 4;
    this.mass     = 1; // 0.01 * pow(this.r, 2);
    this.lifetime = 200;
  }
  
  finished() {
    return this.lifetime < 0;
  }
  
  applyForce(force) {
    this.acc.add(force / this.mass);
  }
  
  edges() {
    if (this.y > height - this.r) {
      this.y = height - this.r;
      this.vel.y *= -1
    }
    if (this.y < this.r) {
      this.y = this.r;
      this.vel.y *= -1
    }
    if (this.x > width - this.r) {
      this.y = width - this.r;
      this.vel.x *= -1
    }
    if (this.x < this.r) {
      this.x = this.r;
      this.vel.x *= -1
    }
  }
  
  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
    
    this.lifetime -= 1;
  }
  
  show() {
    stroke(255, this.lifetime);
    strokeWeight(2);
    fill(255, this.lifetime);
    circle(this.x, this.y, this.r * 2);
  }
}