var y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
}

function draw() {
  background(0);
  fill(255);

  if (y < 1000){
    y = y + 10;
  } else {
    y = 0;
  }
  
  ellipse( 100, y, 10, 10);
}