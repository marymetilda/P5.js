var x = 50;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);

  if (x > width - 50 || x < 50) {
    speed = speed * -1;
  }

  x += speed;
}
