
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// QuadTree
// 1: https://www.youtube.com/watch?v=OJxEcs0w_kE
// 2: https://www.youtube.com/watch?v=QQx_NmCIuCY

// For more:
// https://github.com/CodingTrain/QuadTree

let qtree;

function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent('canvas');
  background(255);
  let boundary = new Rectangle(width/2, height/2, width/2, height/2);
  qtree = new QuadTree(boundary, 4);
  for (let i = 0; i < 300; i++) {
    let x = randomGaussian(width / 2, width / 8);
    let y = randomGaussian(height / 2, height / 8);
    let p = new Point(x, y);
    qtree.insert(p);
  }
}

function draw() {
  background(0);
  qtree.show();

  stroke(0, 255, 0);
  rectMode(CENTER);
  let range = new Circle(mouseX, mouseY, 60);
  
  // This check has been introduced due to a bug discussed in https://github.com/CodingTrain/website/pull/556
  if (mouseX < width && mouseY < height) {
    circle(range.x, range.y, range.r * 2);
    let points = qtree.query(range);
    for (let p of points) {
      strokeWeight(4);
      point(p.x, p.y);
    }
  }

}

