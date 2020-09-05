function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  /*right eye of robot*/
  fill(0, 0, 0);
  ellipse(50, 100, 80, 80);

  /*left eye of robot*/
  fill(0, 0, 0);
  ellipse(200, 100, 80, 80);

  /*red lips of robot*/
  fill(0);
  rect(100, 200, 100, 25);

  /*right cheek of robot*/
  fill(255, 0, 0);
  ellipse(300, 200, 40, 40);

  /*left cheek of robot*/
  fill(255, 0, 0);
  ellipse(25, 200, 40, 40);
}
