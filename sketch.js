let x = 0;
let y = 0;
let spac = 50;

function setup() {
  createCanvas(1000, 1000);
  background(20);
}

function draw() {
  stroke(200);
  strokeWeight(10);

  if (random(1) < 0.5) {
    line(x, y, x + spac, y + spac);
  } else {
    line(x, y + spac, x + spac, y);
  }
  x = x + spac;

  if (x > width) {
    x = 0;
    y = y + spac;
  }
}