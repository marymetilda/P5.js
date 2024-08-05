function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
    fill(255, 0, 255);
  }
  rect(300, 200, 100, 100);
}
