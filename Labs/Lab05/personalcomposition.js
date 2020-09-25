var nums = [100, 25, 46, 72];
var num = 23;
let i = 0;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  // Loop for circles
  for (var i = 0; i < 4; i++) {
    stroke(255);
    fill(110);

    ellipse(i * 100, 200, nums[i], nums[i]);
  }
}
