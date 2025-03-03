var nums = [100, 25, 12, 72];
var num = 23;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  fill(51);
  for (let i = 0; i < nums.length; i++) {
    ellipse(i * 100 + 100, 200, nums[i], nums[i]);
  }
}
