function setup() {
  createCanvas(200, 100);
  background(224);
  strokeWeight(2);
  stroke(255);

  for (var y = 0; y < height; y = y + 25) {
    for (var x = 0; x < width; x = x + 25) {
      fill(255, 0, 0);
      rect(x, y, 30, 30);
      // I know this is not was you wanted but I struggled trying to figure out how to create the image. There's not an example in the book I could using loops to create a pyramid.//
      // first row
      fill(255);
      rect(25, 0, 25, 24);
      rect(50, 0, 25, 24);
      rect(75, 0, 25, 24);
      rect(100, 0, 25, 24);
      rect(125, 0, 25, 24);
      rect(150, 0, 25, 24);
      rect(175, 0, 25, 24);
      // second row
      rect(50, 25, 25, 24);
      rect(75, 25, 25, 24);
      rect(100, 25, 25, 24);
      rect(125, 25, 25, 24);
      rect(150, 25, 25, 24);
      rect(175, 25, 25, 24);
      rect(200, 25, 25, 24);
      // third row
      rect(75, 50, 25, 24);
      rect(100, 50, 25, 24);
      rect(100, 50, 25, 24);
      rect(125, 50, 25, 24);
      rect(150, 50, 25, 24);
      rect(175, 50, 25, 24);
      rect(200, 50, 25, 24);

      // fourth row
      rect(100, 75, 25, 24);
      rect(125, 75, 25, 24);
      rect(100, 75, 25, 24);
      rect(125, 75, 25, 24);
      rect(150, 75, 25, 24);
      rect(175, 75, 25, 24);
      rect(200, 75, 25, 24);
    }
  }
}

//function draw() {
// for (i = 1; i <= 4; i++) {
//  for (j = 1; j <= i; j++) {
//    document.write("!");
//    document.write("<br>");
//  }
// }
//}
