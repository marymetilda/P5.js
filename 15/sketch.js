function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  var x = 0;

  while (x <= width) {
    fill(100, 0, 30);
    ellipse(x, 100, 25, 25);
    x += 50;
  }

  for (var x = 0; x <= width; x += 50) {
    fill(0, 80, 30);
    ellipse(x, 300, 25, 25);
  }
}
