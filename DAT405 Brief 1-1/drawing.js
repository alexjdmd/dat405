
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(random(255),random(255),random(255));
  frameRate(100);

}
function draw(){
  //setting the size of the squares relative to the size of the window`
var rectX = windowWidth/500
var x1 = map(mouseX, 0 , windowWidth, 0,windowWidth)
//storing the current x coordinate of the mouse in a variable
var x2 = map(mouseY, 0 , windowHeight,0,windowHeight)
//storing the current y coordinate of the mouse in a variable
fill(0)
noStroke();
rectMode(RADIUS);
//changing the mode of the rectangle so that it is in the centre of the cursor rather than the corner.
rect(x1, x2,rectX,rectX);
}
// A function that resizes the canvas depending on the size of the window.
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
//have the mouse move and change the colour of the square that it is hovering over, potentially adding a stroke to it as well.

/////////////////////////////////////////////////////////////////////////////////////////////OLD CODE

  //  for(var g = 0; g < windowWidth; g++){
      //calling the function that draws the rectangles
  //    drawrectfunky();
//    }

//  function drawrectfunky(){
//    fill(random(255));
//    noStroke();
//    rect(g*rectX, 0 , rectX ,windowHeight)
//    noLoop();
//  }
