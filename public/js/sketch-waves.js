let waves1 = [];
let waves2 = [];

function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent('canvas');
  
  
  for (let i = 0; i < 5; i++) {
    waves1[i] = new Wave(random(50, 80), random(100, 220), random(PI));
    waves2[i] = new Wave(random(50, 80), random(100, 220), random(PI));
  }
}

function draw() {
  background(0);
  for (let x = 0; x < width+1; x += 10) {
    let y1 = 0;
    for (let wave of waves1) {
      y1 += wave.evaluate(x);
    }
    y1 *= 0.5 * height/waves1.length;
    
    let y2 = 0;
    for (let wave of waves2) {
      y2 += wave.evaluate(x);
    }
    y2 *= 1.0 * y1/waves2.length;
    
    
    stroke('BurlyWood');
    strokeWeight(8);
    line(x, height, x, 0);
    stroke('coral');
    line(x, y1 + height / 2, x, -y1 + height/2);
    stroke('DarkSeaGreen');
    line(x, y2 + height / 2, x, -y2 + height/2);
    noStroke();
    fill('LightBlue');
    ellipse(x, y1 + height / 2, 8);
    ellipse(x, -y1 + height / 2, 8);
    ellipse(x, y2 + height / 2, 8);
    ellipse(x, -y2 + height / 2, 8);
    
  }
  
  for (let wave of waves1) {
    wave.update();
  }
  for (let wave of waves2) {
    wave.update();
  }
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 15);
  }
}
