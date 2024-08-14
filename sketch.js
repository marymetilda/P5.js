let squareSize;
let lineWidth;

function setup() {
  createCanvas(400, 400);
  background(0);
  lineWidth = random(2, 10);
}

function draw() {
  background(0);
  squareSize = random(10, 250);

  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0, 0, 255, 100);
  fill(0, 255, 0, 100);
  square(200, 150, squareSize);
}
