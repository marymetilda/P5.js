function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  noStroke();
  fill(0, 255, 250, 50);
  circle(mouseX + 50, mouseY - 50, 8);

  noStroke();
  fill(255, 0, 250, 50);
  circle(mouseX + 20, mouseY - 20, 8);

  noStroke();
  fill(255, 250, 0, 50);
  circle(mouseX + 70, mouseY - 70, 8);
}

function mousePressed() {
  background(0);
}
