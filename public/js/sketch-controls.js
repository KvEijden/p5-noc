// P5 sketch

let elt;
let fc = 0;

let slider, nameP, input;

let dropzone, img;

function preload() {
  
}
function setup() {
  
  let canvas = createCanvas(600, 400);    
  canvas.parent('canvas');
  // canvas.position(40, 40, 'relative');
  elt = createElement('span', 'Waiting').parent('bottom');
  let button = createButton('go go go');
  button.style('width', '100px');
  button.parent('left');
  button.mousePressed(changeColor);
  slider = createSlider(0, 100, 50);
  slider.parent('left');
  nameP = createP('your name goes here');
  nameP.parent('top');
  input = createInput('type');
  input.style('width', '50px');
  input.parent('left');
  input.input(() => nameP.html(input.value()));
  
  spans = selectAll('.control');
  for (let s of spans) {
    s.mouseOver(highlight);
    s.mouseOut(unhighlight);
  }
  
  // dropzone
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
}

function changeText() {
  nameP.html(input.value())
}
function changeColor() {
  fc = random(0,255);
}

function highlight() {
  this.style('background-color', '#F0F');
}
function unhighlight() {
  this.style('background-color', '#000');
}

function gotFile(file) {
  img = createImage(file.data);
  // img.size(100, 100);
  image(img, 0, 0, 100, 100);
  
}

function draw() {
  background('antiquewhite');
  fill(fc);
  x = 100; 
  y = 100;
  rect(x, y, slider.value(), slider.value());
  // image(img, 0, 0);
}

function mousePressed() {
  elt.html('My favorites are:')
  createP('My number is ' + random(0,10)).parent('bottom');
}

