
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255,160,155);
  frameRate(100);

}

function draw(){
  var size = random(50)
  var y = map(mouseY, 0 , windowHeight,0,windowHeight)
  var x = map(mouseX, 0 , windowWidth, 0,windowWidth)
CustomShape(x,y,size);
}

function CustomShape(x,y,size){
  fill(255);
  noStroke();
  ellipse(x,y,size,size);
}

// A function that resizes the canvas depending on the size of the window.
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
