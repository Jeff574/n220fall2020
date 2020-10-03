var spot = {
  x: 240,
  y: 180,
};

//Array of set colors by random when click event is executed.

//var colors = [random(204, 0, 0), random(0, 204, 0), random(0, 0, 204)];

function setup() {
  createCanvas(500, 400);
  stroke(255);
  strokeWeight(2);
}

function draw() {
  background(0);

  ellipse(spot.x, spot.y, 150, 150);
  //spot.x = random(0, width);
  //spot.y = random(0, height);
}

function mousePressed() {
  var colors = [random(204, 0, 0), random(0, 204, 0), random(0, 0, 204)];
  fill(colors);
}
