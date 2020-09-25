var drop = [];
x = 0;
y = 0;

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 200; i++) {
    drop[i] = new Drop();
  }
}

function draw() {
  background(0, 51, 102);
  for (var i = 0; i < 200; i++) {
    drop[i].show();
    drop[i].update();
  }
}

// Controls the speed of the falling water
function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);

  this.show = function () {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 2, 5);
  };

  this.update = function () {
    this.y = this.y + 8;
    if (this.y > height) {
      this.y = 0;
    }
  };
}
