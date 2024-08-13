let bubble1;
let bubble2;
let bubble3;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(100, 200, 30);
  bubble2 = new Bubble(200, 250, 50);
  bubble3 = new Bubble(300, 100, 60);
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
