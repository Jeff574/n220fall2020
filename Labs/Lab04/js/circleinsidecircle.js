function setup() {
  createCanvas(550, 500);
}

function draw() {
  background(224);
  noFill();

  // For loop syntax
  for (var a = 1; a < 50; a++) {
    stroke(0);
    circle(260, 250, a * 9);
  }

  // By decreasing the size of the radius and changing variable a to 1, was I able to get my own version of the sample shown in the assignments. I had to really mess around with the numbers but I like the end result.//
}
