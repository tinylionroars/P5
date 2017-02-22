var x = 0;
var y = 0;


function setup() {
  createCanvas(800, 600)
  background(0)
}

function draw() {
  
  stroke(mouseX-255, 100, mouseY, mouseX);
  strokeWeight(5);
  
  rectMode(CORNER);
  
  noFill();
  rect(x, y, 60, 60);
  
  x = x+50
  
  if(x>width) {
    x = 0;
    y = y + 50;
  }
  
  if(y>height) {
    x = 0;
    y = 0;
  }
  
   fill (mouseY-255, mouseX/width*255, mouseY/height*300);
  
  if (mouseIsPressed === true) {
    noFill();
    noStroke();
  }
  
  ellipse(mouseX, mouseY, 25, 25);
  
}
  
function keyPressed() {
  
  fill (mouseY-255, mouseX/width*255, mouseY/height*300);
  rect(x, y, random(100), random(100));
    
  x = x+random(-75, 75);
  y = y+random(-75, 75);
  
  if(x<0) x = width;
  if(y<0) y = height;
  if(x>width) x = 0;
  if(y>height) y = 0;
  }

function keyTyped() {
  if(key==' ') background(0);
}

/*
// keyPressed cares about the physical key you hit
function keyPressed() {
  console.log('down: ' + key + ' ' + keyCode);
  if(key=='F') go=1; // this will fire on any press of the physical key F
}

// keyReleased cares about the physical key you hit
function keyReleased() {
  console.log('up ' + key + ' ' + keyCode);
  if(key=='F') go=0; // this will fire on any press of the physical key F
}
*/