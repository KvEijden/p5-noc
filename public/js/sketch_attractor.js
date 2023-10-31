// P5 sketch

let gravity, dc;
let movers = [];
let attractor;

function preload() {
  
}
function setup() {
  
  let canvas = createCanvas(900, 600);    
  canvas.parent('canvas');
  
  attractor = new Attractor(width/2, height/2, 100);
}

function draw() {
  // background('antiquewhite');
  
  movers.forEach((m) => {
    m.update();
    m.draw();
    attractor.attract(m);
  });
  
  attractor.draw();
}

function mousePressed() {
  let m = random(50, 150);
  let mover = new Mover(mouseX, mouseY, m);
  movers.push(mover);
}

