function setup() {
  createCanvas(620, 500);
}

// Only focused on the x location which is the horizontal direction. By adding x + 25 will create more circles going in the same direction. I also made the width of the canvas "620" to hide any extra circles because the required is to show only 25 circles.//

function draw() {
  background(255);
  // Loop
  for (var x = 4; x <= width; x = x + 25) {
    console.log(x);
    fill(0);
    circle(x, 150, 10, 10);
  }
}
