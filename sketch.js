let circleX;
let circleRadius;

function setup() {
  createCanvas(400, 400);
  background(0);
  circleX = 0;
  circleRadius = 24;
}

function draw() {
  background(0);
  noStroke();
  fill(255, 200);
  circle(circleX, 50, circleRadius);

  circleX = circleX + 1;
  circleRadius = circleRadius + 1;
}

function mousePressed() {
  background(0);
  circleX = 0;
  circleRadius = 24;
}
