function setup() {
  //Set the size of rendering window - pixels
  createCanvas(1000, 600);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(30);

  //Preferences for the text (size, and alignment)
  textSize(20);
  textAlign(CENTER);
background(155, 155 , 155);
  rand=Math.floor(Math.random() * 256)
  rand2=Math.floor(Math.random() * 256)
  rand3=Math.floor(Math.random() * 256)

  draw2();
  draw1();

function draw1(){
    fill(0, 0, 255);
  ellipse(100, 100, 200, 200);
  fill(255,0,0);
  ellipse(900, 100, 200, 200);
  fill(130,255,0);
  ellipse(100, 500, 200, 200);
  fill(255,255,0);
  ellipse(900, 500, 200, 200);
}
function draw2(){
  fill(140,140,140);
  stroke(50);
  line(100,100,900,500);
}
}
