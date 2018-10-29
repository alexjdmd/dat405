//Initialization function
function setup() {
framerate(30);
  createCanvas(594,841);
  draw();
  draw1();
}

//Rendering function
function draw() {
  //Set a background color
  background(25, 0, 205);

  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Rendering...")
  noLoop();
}
function draw1(){
 // draw() loops forever, until stopped
 var yPos = 0;
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}
