function setup(){
  createCanvas(1920,1080);
  background(random(255),random(255),random(255));
  frameRate(30);
}
function draw(){
  var x = 10
  var height = 10
  for (var i = 0; i<12;i++){
    for(var g = 0; g < 10; g++){
      //calling the two differnt functions, one for the border, the other for the funky squares
      drawrectsolid();
      drawrectfunky();
    }
  }
  function drawrectsolid(){
    fill(225,226,140);
    rect(g*x, i*height, height,height)
  }
  function drawrectfunky(){
    fill(random(255),random(255),random(255));
    rect(g*x + 25, i*height + 25, height - 50,height - 50)
  }
}
