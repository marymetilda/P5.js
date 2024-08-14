class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
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
    ellipse(this.x, this.y, this.r * 2);
  }
}
