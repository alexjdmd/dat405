  var x;
  var y;
  var size;
  var shapeSelected = 0;
  function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255,160,40);
    frameRate(30);
    x = 500
    y= 500
    size = 150
  }

  function draw(){
    //var y = map(mouseY, 0 , windowHeight,0,windowHeight)
    //var x = map(mouseX, 0 , windowWidth, 0,windowWidth)

    CustomShape(x,y,size,shapeSelected);
    if (y>windowHeight){
      y=0
    }

    if (x>windowWidth){
      x=0
    }

  }

  function keyPressed(){
    if (keyCode == 65){
      shapeSelected = 1
    }
    if (keyCode == 83){
     shapeSelected = 2
    }
  if (keyCode == 68){
    shapeSelected = 3
  }
  }

  function CustomShape(x,y,size,shapeSelected){
    switch(shapeSelected){
      case 1:     fill(0);
          rectMode(CENTER);
          rect(x,y,size,size);
          fill(255);
          ellipse(x,y,size,size);
          fill(0)
          rect(x,y,size/2,size/2);
     case 2: fill(255);
          for (var rX = 0;rX<9;rX+140){
rotateZ(rX)
          triangle(y-50, y-50, x, 200, y+50, y-50);

}

     case 3:
    }

  }

  // A function that resizes the canvas depending on the size of the window.
  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(255,160,40)
  }


//CODE TO HIGHLIGHT SHAPE
// if (shapeSelected == true){
//   strokeWeight(4);
//   stroke(255,23,40);
// } else {
//   noStroke();
// }
