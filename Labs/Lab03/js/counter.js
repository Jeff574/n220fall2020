function setup() {
  createCanvas(600, 300); // Required Canvas size
}

function draw() {
  background(255, 178, 102); // Orange Canvas

  ellipse(mouseX, 100, 100, 100); // The circle that moves with the mouse

  if (mouseX > 400) {
    // Turns the circle red to the right
    fill(255, 0, 0);
  }

  if (mouseX < 150) {
    // Turns the circle blue to the left
    fill(0, 0, 255);
  }
}
