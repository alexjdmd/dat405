function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  background(60);
  noLoop();

}
function draw(){
  var  size = random(50,100);
  var cSizeX = random(0,windowWidth);
  var cSizeY = random(0,windowHeight);

for (var i = 0; i<300; i++){
  var  randR = random(255);
  var  randG = random(255);
  var  randB = random(255);
  push();
    translate(random(windowWidth),random(windowHeight));
    rotate(random(PI*2));
        scale(random(2),random(3))
    stroke(randR,randG,randB);
    strokeWeight(10);
    noFill();
    ellipse(0,0,size,size);
    pop();
  }
}
