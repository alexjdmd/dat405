function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
}
function draw(){
    background(0);
  var x = map(mouseX,0,width,0,255);
  var y = map(mouseY,0,width,0,255);
  var iX = map(mouseX,0,width,255,0);
  var iY = map(mouseY,0,width,255,0);
  var col1= (244,133,120);
  var tile = 25;
  fill(255,0,0,x);
  rect(0,0,windowWidth/2,windowHeight/2);
  fill(0,255,0,y);
  rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);
  fill(255,255,0,iX);
  rect(0,windowHeight/2,windowWidth/2,windowHeight/2);
  fill(0,0,255,iY);
  rect(windowWidth/2,0,windowWidth/2,windowHeight/2);
}
