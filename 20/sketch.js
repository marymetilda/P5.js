let bubble1;
let bubble2;
let bubble3;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
    this.color = {
      r: 200,
      g: 0,
      b: 150,
    };
  }
  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(this.color.r, this.color.g, this.color.b);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}
