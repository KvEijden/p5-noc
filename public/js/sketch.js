
let target;
let pursuer;

function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent('canvas');
  pursuer = new Boid(100, 200);
  target  = new Target(width/2, height/2, true);
  
}

function draw() {
  background(0);
  
  fill('coral');
  noStroke();
  circle(target.x, target.y, 32);
  let steering = pursuer.arrive(target.pos);
  pursuer.applyForce(steering);
  pursuer.update();
  pursuer.show();
  
  target.update();
  target.edges();
  target.show();
  
  if (target.hit_by(pursuer)) {
    target = new Target(random(width), random(height), true); // target does not move
  }
  
}

function mousePressed() {
  
}
