function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0); // Black background

  //My for loop
  for (y = 0; y <= height + 10; y += 30) {
    fill(255, 153, 204); // strawberry square
    rect(100, 150, 125, 50); // 1st rectangle
  }
  if (y <= height + 20) {
    fill(255, 229, 204); // vanilla square
    rect(220, 150, 125, 50); // 2nd rectangle
  }
  if (y <= height + 40) {
    fill(153, 76, 0); // chocolate square
    rect(340, 150, 125, 50); // 3rd rectangle
  }
}

// My Planner

//fill(255, 153, 204); // strawberry square
//rect(100, 50, 200, 50); // 1st rectangle

//fill(255, 229, 204); // vanilla square
//rect(100, 100, 200, 50); // 2nd rectangle

//fill(153, 76, 0); // chocolate square
//rect(100, 150, 200, 50); // 3rd rectangle
