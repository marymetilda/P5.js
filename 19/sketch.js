function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);

  lollipop(100, 100, 100);
  lollipop(500, 200, 200);
}

function lollipop(x, y, diameter) {
  fill(0, 200, 255);
  rect(x - 10, y, 20, 150);

  fill(255, 0, 200);
  ellipse(x, y, diameter, diameter);
}
