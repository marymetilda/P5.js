let bubble;

function setup() {
  createCanvas(600, 400);
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);

  bubble = new Bubble(x, y, r);
}

function mousePressed() {
  bubble.clicked();
}

function draw() {
  background(0);
  bubble.move();
  bubble.show();
}
