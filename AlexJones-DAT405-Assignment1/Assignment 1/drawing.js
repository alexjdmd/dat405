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
var mainCanvas = function(p){

  //SETUP FUNCTION
  p.setup = function(){
    cSizeX = 594;
    cSizeY = 841;
    //CANVAS VARIABLE PARENTED TO "SKETCH-HOLDER" (DEFINED IN HTML)
    var can = p.createCanvas(cSizeX,cSizeY);
    can.parent('sketch-holder');
    p.background(255,160,40);
    //SETTING THE FRAMERATE AND THE VALUES FOR THE VARIABLES TO BE USED IN CREATING THE SHAPES
    p.frameRate(10);
    x = 0;
    y= 0;
    size = 100;
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
      shapeSelected = 1;
    }
    if (p.keyCode == 83){
      shapeSelected = 2;
    }
    if (p.keyCode == 68){
      shapeSelected = 3;
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
      p.fill(0);
      p.rect(x,y,size/2,size/2);
      //sets the 1st value in the array "selectedArray" to true and the others to false
      selectedArray[0] = true;
      selectedArray[1] = false;
      selectedArray[2] = false;
      break;
      case 2:
      //translates the shape to a random location on the canvas
      p.translate(p.random(cSizeX),p.random(cSizeY));
      //A for-next loop that checks to see if the value that is being incremented is even or odd,
      //and sets the fill colour accordingly.
      //it then draws a polygon with the corresponding colour, getting smaller each time.
      for(var r = 0;r<10;r++){
        if (p.abs(r) % 2 == 0){
          p.fill(0);
        } else {
          p.fill(randR,randG,randB);
        }
        p.polydraw(x,y,size - r*(size/10),9);
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
  //a function that draws a polygon based on the values inputed with it: x, y, the size of the polygon, and the
  //number of sides.
  p.polydraw = function(x, y, radius, numsides) {
    //sets the value of the variable "angle" to 2Pi / the number of sides inputted
    var angle = p.TWO_PI / numsides;
    //starts the beginShape() function which creates a custom shape
    p.beginShape();
    //a for-next loop that increments'a' by the value of 'angle' until it is greater than 2Pi
    for (var d = 0; d < p.TWO_PI; d += angle) {
      //declares variables 'cosinx', and 'siny' as the x and y coordinates added to the cos() and sin() of
      //the incremented value in the for-next loop, and then multiplied by the radius
      var cosinx = x + p.cos(d) * radius;
      var siny = y + p.sin(d) * radius;
      //the vertex function is called using the variables cosinx and sinx, in order to plot the points of the polygon
      p.vertex(cosinx, siny);
    }
    p.endShape(p.CLOSE);
  }
}

//A second canvas created using instancing which will display instructions on how to use the program
//and which shape has been selected
var selectionCanvas = function(s){
  var polysize = 90;
  var pauseText = "Not Started / Paused";
  var shapeSize = 150;
  s.setup = function(){
    var can =  s.createCanvas(600,900);
    //CANVAS VARIABLE PARENTED TO "SKETCH-HOLDER" (DEFINED IN HTML)
    can.parent('sketch-holder');
    //background colour set to white
    s.background(255);
  }
  s.draw = function(){
    //CODE TO HIGHLIGHT SHAPE
    s.background(255);
    s.textDraw();

    //An if statement that checks to see if the value in a boolean array is true and if so, call the
    //hightlightedShape function
    if (selectedArray[0] == true){
      //plots shape 1 on the canvas with a red outline
      s.hightlightedShape(100,300,shapeSize,1,true);
      s.hightlightedShape(300,300,shapeSize,2,false);
      s.translate(500,300);
      s.hightlightedShape(0,0,shapeSize,3,false);
    } else if (selectedArray[1] == true) {
      //plots shape 2 on the canvas with a red outline
      s.hightlightedShape(300,300,shapeSize,2,true);
      s.hightlightedShape(100,300,shapeSize,1,false);
      s.translate(500,300);
      s.hightlightedShape(0,0,shapeSize,3,false);
    } else if (selectedArray[2] == true) {
      //plots shape 3 on the canvas with a red outline
      s.hightlightedShape(300,300,shapeSize,2,false);
      s.hightlightedShape(100,300,shapeSize,1,false);
      s.translate(500,300);
      s.hightlightedShape(0,0,shapeSize,3,true);
    } else{
      //if none of the shapes have been selected, draw the unhighlighted shapes
      s.hightlightedShape(100,300,shapeSize,1,false);
      s.hightlightedShape(300,300,shapeSize,2,false);
      s.translate(500,300);
      s.hightlightedShape(0,0,shapeSize,3,false);
    }
  }
  //A function that draws the instructions onto the canvas
  s.textDraw = function(){
    s.fill(0);
    s.textAlign(s.CENTER);
    s.textSize(30);
    s.text(pauseText,300,100);
    s.textSize(20);
    s.text("Press 'R' to reset                  Press 'Space' to Pause / Start", 300,150);
    s.textSize(30);
    s.text("A", 100, 450);
    s.text("S", 300, 450);
    s.text("D", 500, 450);
    s.textSize(20);
    s.text("Your selection will only appear once the program is running", 300, 500);
    //if the program has started then the text "Running" will be displayed, otherwise it will display
    //"Not started / paused"
    if (started == true){
      pauseText = "Running";
    } else{
      started = false;
      pauseText = "Not Started / Paused";
    }
  }
  //A function that draws the custom shapes on the second canvas.
  s.hightlightedShape = function(x,y,size,shapeSelected,stroked){
    //the variable 'stroked' is true if the corresponding key has been pressed, and the if statement will change the
    //stroke of the shape, as well as the weight
    if (stroked == true){
      s.strokeWeight(4);
      s.stroke(255,23,40);
    } else {
      s.noStroke();
    }
    //CASE STATEMENT REFERRING TO THE VARIABLE "shapeSelected"
    switch (shapeSelected) {
      case 1:
      s.fill(0);
      s.rectMode(s.CENTER);
      s.rect(x,y,size,size);
      s.fill(255);
      s.ellipse(x,y,size,size);
      s.fill(0);
      s.rect(x,y,size/2,size/2);
      break;
      case 2:
      for(var r = 0;r<10;r++){
        if (s.abs(r) % 2 == 0){
          s.fill(0);
        } else {
          s.fill(255);
        }
        s.polydraw(x,y,polysize - r*10,9);
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
  //Function used to draw a polygon
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
//creates 2 variables that create a new p5.js instance using the functions 'select', and 'sketch'
var selecting = new p5(selectionCanvas);
var drawing = new p5(mainCanvas);
