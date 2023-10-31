let emitters = [];


function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent('canvas');
}

function draw() {
  background(0);
  for (let e of emitters) {
    e.update();
    e.show();
  }
  
  for (let e of emitters) {
    e.emit(1);
  }
  
  
  // remove dead particles to speed things up
  
}

function mousePressed() {
  
  let pos = createVector(mouseX, mouseY);
  emitters.push(new Emitter(pos));
}
