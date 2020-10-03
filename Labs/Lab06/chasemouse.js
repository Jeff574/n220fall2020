x = 0;
y = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  fill(255);
  ellipse(280, 200, 50, 50);

  if (mouseX < 100 && mouseX > 300) {
    x = x + 3;
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  }
}
