var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
  color: {
    r: 255,
    g: 0,
    b: 200,
  },
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  display();
  bounce();
  move();
}

function move() {
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}
function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed *= -1;
    ball.color.r = 0;
    ball.color.g = random(255);
    ball.color.b = random(255);
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed *= -1;
    ball.color.r = random(255);
    ball.color.g = 0;
    ball.color.b = random(255);
  }
}
function display() {
  stroke(255);
  strokeWeight(4);
  fill(ball.color.r, ball.color.g, ball.color.b);
  ellipse(ball.x, ball.y, 24, 24);
}
