//GLOBAL VARIABLES
var x;
var y;
var size;
var shapeSelected = 0;
var cSizeX;
var cSizeY;
var toggleLoop = false;
var started = false;
var stroked = false
var selectedArray= [false, false, false];

//INSTANCED VARIABLE FOR THE MAIN CANVAS
var sketch = function(p){

//SETUP FUNCTION
  p.setup = function(){
    cSizeX = 567;
    cSizeY = 841;
//CANVAS VARIABLE PARENTED TO "SKETCH-HOLDER" (DEFINED IN HTML)
    var can = p.createCanvas(cSizeX,cSizeY);
    can.parent('sketch-holder');
    p.background(255,160,40);
//SETTING THE FRAMERATE
    p.frameRate(10);
    x = 0
    y= 0
    size = 100
  }
//DRAW FUNCTION
  p.draw = function(){
//IF STATEMENT THAT WILL ONLY START THE PROGRAM IF A KEY HAS BEEN PRESSED
    if (p.keyIsPressed == true && toggleLoop == false){
      p.background(255,160,40);
    }
//THE SHAPES WILL ONLY BE DRAWN IF THE PROGRAM ISN'T "PAUSED" (started = true)
    if (started == true){
      toggleLoop = true;
      p.CustomShape(x,y,size,shapeSelected);
    }
  }
//KEYPRESSED FUNCTION THAT HAS IF STATEMENTS TO SEE IF THE "A" , "S" , "D" , "R", OR SPACE KEYS HAVE BEEN PRESSED
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
//FUNCTION FOR THE CUSTOM SHAPES
  p.CustomShape = function(x,y,size,shapeSelected){
    //VARIABLES FOR RANDOM R G B COLOURS
    var randR = p.random(255);
    var randG = p.random(255);
    var randB = p.random(255);
    //CASE STATEMENT REFERRING TO THE VARIABLE "shapeSelected"
    switch(shapeSelected){
      case 1:
      //translates the shape to a random location on the canvas
      p.translate(p.random(cSizeX),p.random(cSizeY));
      p.fill(0);
      //the rectangle will be drawn from the centre rather than a corner
      p.rectMode(p.CENTER);
      p.rect(x,y,size,size);
      //the fill of the rectangle will be a random RGB colour
      p.fill(randR,randG,randB);
      p.ellipse(x,y,size,size);
      p.fill(0)
      p.rect(x,y,size/2,size/2);
      //sets the 1st value in the array "selectedArray" to true and the others to false
      selectedArray[0] = true;
      selectedArray[1] = false;
      selectedArray[2] = false;
      break;
      case 2:
      //translates the shape to a random location on the canvas
      p.translate(p.random(cSizeX),p.random(cSizeY));
      for(var r = 0;r<10;r++){
        if (p.abs(r) % 2 == 0){
          p.fill(0);
        } else {
          p.fill(randR,randG,randB);
        }
        p.polydraw(x,y,size - r*(size/10),9)
      }
      //sets the 2nd value in the array "selectedArray" to true and the others to false
      selectedArray[0] = false;
      selectedArray[1] = true;
      selectedArray[2] = false;
      break;
      case 3:
      //translates the shape to a random location on the canvas
      p.translate(p.random(cSizeX),p.random(cSizeY));
      //A for-next loop that draws and rotates rectangles so that they form a "circle"
      for (var r = 0;r<22.55;r++){
      //the rectMode is set to RADIUS so that it is drawn from the centre
        p.rectMode(p.CENTER);
        p.fill(randR,randG, randB);
        p.rotate(360);
        p.rect(x,y,10,size);
      }
      //sets the 3rd value in the array "selectedArray" to true and the others to false
      selectedArray[0] = false;
      selectedArray[1] = false;
      selectedArray[2] = true;
      break;
    }

  }

  p.polydraw = function(x, y, radius, numsides) {
    var angle = p.TWO_PI / numsides;
    p.beginShape();
    for (var a = 0; a < p.TWO_PI; a += angle) {
      var cosinx = x + p.cos(a) * radius;
      var siny = y + p.sin(a) * radius;
      p.vertex(cosinx, siny);
    }
    p.endShape(p.CLOSE);
  }

  // A function that resizes the canvas depending on the size of the window.
  p.windowResized = function(){
    p.setup();
  }
}


var select = function(s){
  var polysize = 90
  var pauseText = "Not Started / Paused"
  var shapeSize = 150
  s.setup = function(){
    var can =  s.createCanvas(600,900)
    can.parent('sketch-holder')
    s.background(255)
  }
  s.draw = function(){
    //CODE TO HIGHLIGHT SHAPE
    s.background(255)
    s.textDraw();


    if (selectedArray[0] == true){
      s.CustomShape(100,300,shapeSize,1,true)
      s.CustomShape(300,300,shapeSize,2,false)
      s.translate(500,300)
      s.CustomShape(0,0,shapeSize,3,false)
    } else if (selectedArray[1] == true) {
      s.CustomShape(300,300,shapeSize,2,true)
      s.CustomShape(100,300,shapeSize,1,false)
      s.translate(500,300)
      s.CustomShape(0,0,shapeSize,3,false)
    } else if (selectedArray[2] == true) {
      s.CustomShape(300,300,shapeSize,2,false)
      s.CustomShape(100,300,shapeSize,1,false)
      s.translate(500,300)
      s.CustomShape(0,0,shapeSize,3,true)
  } else{
    s.CustomShape(100,300,shapeSize,1,false)
    s.CustomShape(300,300,shapeSize,2,false)
    s.translate(500,300)
    s.CustomShape(0,0,shapeSize,3,false)
  }
  }
  s.textDraw = function(){
    s.fill(0)
    s.textAlign(s.CENTER)
    s.textSize(30)
    s.text(pauseText,300,100)
    s.textSize(20)
    s.text("Press 'R' to reset                  Press 'Space' to Pause / Resume", 300,150)
    s.textSize(30)
    s.text("A", 100, 450)
    s.text("S", 300, 450)
    s.text("D", 500, 450)
    s.textSize(20)
    s.text("Your selection will only appear once the program is running", 300, 500)
    if (started == true){
      pauseText = "Running"
    } else{
      started = false
      pauseText = "Not Started / Paused"
    }
  }
  s.CustomShape = function(x,y,size,shapeSelected,stroked){
    if (stroked == true){
      s.strokeWeight(4);
      s.stroke(255,23,40);
    } else {
      s.noStroke();
    }
    switch (shapeSelected) {
      case 1:
      s.fill(0);
      s.rectMode(s.CENTER);
      s.rect(x,y,size,size);
      s.fill(255);
      s.ellipse(x,y,size,size);
      s.fill(0)
      s.rect(x,y,size/2,size/2);
      break;
      case 2:
      for(var r = 0;r<10;r++){

        if (s.abs(r) % 2 == 0){
          s.fill(0);
        } else {
          s.fill(255);
        }
        s.polydraw(x,y,polysize - r*10,9)
      }
      break;
      case 3:
      for (var r = 0;r<22.55;r++){
        if (s.abs(r) % 2 == 0){
          s.fill(0);
        } else {
          s.fill(255);
        }
        s.rectMode(s.CENTER);
        s.rotate(360);
        s.rect(x,y,20,180);
      }
      break;
    }
  }
  s.polydraw = function(x, y, radius, numsides) {
    var angle = s.TWO_PI / numsides;
    s.beginShape();
    for (var a = 0; a < s.TWO_PI; a += angle) {
      var sinx = x + s.cos(a) * radius;
      var cosy = y + s.sin(a) * radius;
      s.vertex(sinx, cosy);
    }
    s.endShape(s.CLOSE);
  }
}
var sketch2 = new p5(select)
var drawing = new p5(sketch)
