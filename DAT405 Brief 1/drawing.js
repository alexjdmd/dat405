//Initialization function
function setup() {

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
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}
