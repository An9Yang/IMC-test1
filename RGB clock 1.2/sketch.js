let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  noStroke();
}

function draw() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  angle += 0.01;

  const r1 = map(sin(angle), -1, 1, 0, 255);
  const g1 = map(sin(angle + TWO_PI / 3), -1, 1, 0, 255);
  const b1 = map(sin(angle + 2 * TWO_PI / 3), -1, 1, 0, 255);

  const r2 = 255 - r1;
  const g2 = 255 - g1;
  const b2 = 255 - b1;

  drawGradient(r1, g1, b1, r2, g2, b2);

  fill(255 - r1, 255 - g1, 255 - b1);

  const shapeHour = hours % 12;
  const shapeSize = 60;

  if (shapeHour >= 1 && shapeHour <= 4) {
    // Draw a circle
    ellipse(width / 2, height / 2, shapeSize, shapeSize);
  } else if (shapeHour >= 5 && shapeHour <= 8) {
    // Draw a square
    rectMode(CENTER);
    rect(width / 2, height / 2, shapeSize, shapeSize);
  } else {
    // Draw a triangle
    triangle(
      width / 2, height / 2 - shapeSize / 2,
      width / 2 - shapeSize / 2, height / 2 + shapeSize / 2,
      width / 2 + shapeSize / 2, height / 2 + shapeSize / 2
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawGradient(r1, g1, b1, r2, g2, b2) {
  for (let y = 0; y < height; y++) {
    const t = y / (height - 1);
    const r = lerp(r1, r2, t);
    const g = lerp(g1, g2, t);
    const b = lerp(b1, b2, t);
    stroke(r, g, b);
    line(0, y, width, y);
  }
}

