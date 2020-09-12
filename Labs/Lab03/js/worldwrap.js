let x = 40; // x coordinate
let y = 40; // y coodrinate
let moveLeft = false; // For the if statement to move ball
function setup() {
  createCanvas(800, 600); // Canvas Size Required
}

function draw() {
  background(62, 237, 108); // Color of the Canvas
  fill(51, 255, 255);
  ellipse(x, 150, 60, 60); // Moving ball

  if (moveLeft == false) {
    x = x + 10;
  }
  if (moveLeft == true) {
    x = x - 10;
  }
  if (x > 800) {
    moveLeft = true;
  }

  if (x < 0) {
    moveLeft = false;
  }
}
