var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (on) {
    background(30, 155, 60);
  } else {
    background(0);
  }

  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill(255, 0, 200);
  }
  rectMode(CENTER);
  rect(300, 200, 100, 100);
}

function mousePressed() {
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    on = !on;
  }
}
