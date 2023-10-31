// P5 sketch

let gravity, dc;

function preload() {
  
}
function setup() {
  
  let canvas = createCanvas(900, 600);    
  canvas.parent('canvas');
  m = new Mover(width/2, 0, 25);
  
  gravity = createVector(0, 10);
  dc = 0.1;
}

function draw() {
  background('antiquewhite');
  m.applyForce(gravity);
  m.applyDrag(dc);
  
  m.update();
  m.draw()
  
}


