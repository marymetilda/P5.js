let img;
function setup() {
  createCanvas(400, 400);
  img = loadImage("kitten.jpeg");
}

function draw() {
  background(220);
  image(img, 0, 0);
  noLoop();
}
