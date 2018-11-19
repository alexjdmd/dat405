var x;
var y;
var size;
var shapeSelected = 0;
var cSizeX;
var cSizeY;
var toggleLoop = false;
var started = false;


var sketch = function(p){


p.setup = function(){
  cSizeX = 567;
  cSizeY = 841;
  var can = p.createCanvas(cSizeX,cSizeY);
  can.parent('sketch-holder');
  p.background(255,160,40);
  p.frameRate(10);
  x = 0
  y= 0
  size = 150
}

p.draw = function(){
if (p.keyIsPressed == true && toggleLoop == false){
    p.background(255,160,40);
}

  if (started == true){
    toggleLoop = true;
  p.CustomShape(x,y,size,shapeSelected);
}
}

p.keyPressed = function(){
  if (p.keyCode == 65){
    shapeSelected = 1
  }
  if (p.keyCode == 83){
    shapeSelected = 2
  }
  if (p.keyCode == 68){
    shapeSelected = 3
  }
  if (p.keyCode == 32){
    if (started == false){
      started = true;
    } else{
      started = false;
    }
  }
  if (p.keyCode == 82){
    p.setup();
  }
}

p.CustomShape = function(x,y,size,shapeSelected){
  var randR = p.random(255);
  var randG = p.random(255);
  var randB = p.random(255);
  switch(shapeSelected){
    case 1:
    p.translate(p.random(cSizeX),p.random(cSizeY));
    p.fill(0);
    p.rectMode(p.CENTER);
    p.rect(x,y,size,size);
    p.fill(255);
    p.ellipse(x,y,size,size);
    p.fill(0)
    p.rect(x,y,size/2,size/2);
    break;
    case 2:
    p.translate(p.random(cSizeX),p.random(cSizeY));
    for(var r = 0;r<10;r++){

      if (p.abs(r) % 2 == 0){
        p.fill(0);
      } else {
        p.fill(randR,randG,randB);
      }
      p.polygon(x,y,size - r*10,9)
    }
    break;
    case 3:
    p.translate(p.random(cSizeX),p.random(cSizeY));
    for (var r = 0;r<22.55;r++){
      p.rectMode(p.RADIUS);
      p.fill(randR,randG, randB);
      p.rotate(360);
      p.rect(x,y,10,size);
    }
    break;
  }

}

p.polygon = function(x, y, radius, npoints) {
  var angle = p.TWO_PI / npoints;
  p.beginShape();
  for (var a = 0; a < p.TWO_PI; a += angle) {
    var sx = x + p.cos(a) * radius;
    var sy = y + p.sin(a) * radius;
    p.vertex(sx, sy);
  }
  p.endShape(p.CLOSE);
}

// A function that resizes the canvas depending on the size of the window.
p.windowResized = function(){
  p.setup();
}
}

var drawing = new p5(sketch)

var select = function(s){
  s.setup = function(){
    s.createCanvas(500,500)
    s.background(40)
    s.fill(0)
    s.rect(10,10,300,20)
  }
}
var selectt = new p5(select)
//CODE TO HIGHLIGHT SHAPE
// if (shapeSelected == true){
//   strokeWeight(4);
//   stroke(255,23,40);
// } else {
//   noStroke();
// }
