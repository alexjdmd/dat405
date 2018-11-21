var size;
var x;
var y;

function setup() {
  createCanvas(500,500);
  background(255,0,200);
}

function draw() {
}
function keyPressed(){
  size = random(50,300);
  x = random(500);
  y = random(500);
  if (keyCode == 65){
    for (var n = 0; n<10; n++){
    rectMode(CENTER);
    fill(24,255,60);
    rect(x,y,size/n,size/n);
  }
  }
  if (keyCode == 83){
    fill(40,11,203);
    ellipse(x-10,y-10,size-10,size-10);
    fill(24,203,33)
    ellipse(x+10,y+10,size,size);
  }

  if (keyCode == 68){
    fill(0)
    rect(x+size/2,y+size/2,size,size);
    rect(x-size/2,y-size/2,size,size);
    fill(30,3,233)
    rect(x-size/2,y+size/2,size,size);
    rect(x+size/2,y-size/2,size,size);

  }
}
