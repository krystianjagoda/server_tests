function setup() {
  createCanvas(640,480);
  background(5);
}

function draw() {
	noStroke();
	fill(200, 200, 200, 50);
	ellipse(mouseX, mouseY, 30, 30);
}

