let flower, kitten, puppy, apple, rose;
let cute = [];
let bubbles = [];

function preload() {
  flower = loadImage("flower.png");
  for (let i = 0; i < 4; i++) {
    cute[i] = loadImage("cute" + i + ".jpeg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(100, 150);
    let cutee = random(cute);
    bubbles[i] = new Bubble(x, y, r, cutee);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cutee = img;
  }

  clicked(px, py) {
    if (
      px > this.x &&
      px < this.x + this.r &&
      py > this.y &&
      py < this.y + this.r
    ) {
      this.cutee = random(cute);
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.cutee, this.x, this.y, this.r, this.r);
  }
}
