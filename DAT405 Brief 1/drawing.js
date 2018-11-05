
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(random(255),random(255),random(255));
  frameRate(0.5);

  draw();

}
function draw(){
  var x = windowWidth/5
  //for (var i = 0; i<500/2;i++){
    for(var g = 0; g < windowWidth; g++){
      //calling the two differnt functions, one for the border, the other for the funky squares
      drawrectfunky();
    }

//  }
  function drawrectfunky(){
    fill(random(255),random(255),random(255));
    noStroke();
    rect(g*x, 0 , x ,windowHeight)
    noLoop();
  }

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
//have the mouse move and change the colour of the square that it is hovering over, potentially adding a stroke to it as well.
