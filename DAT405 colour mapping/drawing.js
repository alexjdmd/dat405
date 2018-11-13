function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255,225,10);
}
function draw(){
  var x = map(mouseX,0,windowWidth,0,255);
  var y = map(mouseY,0,windowHeight,0,255);
  var iX = map(mouseX,0,windowWidth,255,0);
  var iY = map(mouseY,0,windowWidth,255,0);
  fill(x,y,iX);
  rect(0,0,windowWidth/2,windowHeight/2);
  fill(iX,iY,x);
  rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);
  fill(iY,x,y);
  rect(0,windowHeight/2,windowWidth/2,windowHeight/2);
  fill(y,x,iY);
  rect(windowWidth/2,0,windowWidth/2,windowHeight/2);

}
