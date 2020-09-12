let x; // x coordinate
let y; // y coordinate
let xSpeed; // Speed set for x coordinate
let ySpeed; // Speed set for y coordinate

function setup() {
  createCanvas(800, 600); // Canvas size required
  x = 400;
  y = 300;
  xSpeed = 10;
  ySpeed = 10;
}

function draw() {
  background(0, 255, 255);
  fill(0, 255, 158); // Color of ball
  circle(x, y, 80, 60); // Ball direction and size set

  x = x + xSpeed;
  y = y + ySpeed;

  if (x + 80 == width || x == 0) {
    xSpeed = xSpeed * -1;
  }
  if (y + 60 == height || y == 0) {
    ySpeed = ySpeed * -1;
  }
}
