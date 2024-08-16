class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  clicked() {
    d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      console.log("Clicked inside bubble");
    }
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    noStroke();
    fill(255, 30);
    ellipse(this.x, this.y, this.r * 2);
  }
}
