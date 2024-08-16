let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].rollover(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].rollover(mouseX, mouseY);
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
    } else {
      this.brightness = 0;
    }
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
