ALEX JONES DAT405 ASSIGNMENT 1

GITHUB LINK: https://github.com/alexjdmd/dat405/tree/master/DAT405%20Brief%201

SCREENSHOTS IN THE "Assets" FOLDER

Using instancing, I have created 2 canvases that display different things.
The first canvas displays the shapes being placed in random positions on the canvas, with random RGB colours.
My project checks to see if a certain key has been pressed, using the keyPressed() function and if statements. The program will not run unless the spacebar has been pressed.

I have used HTML styling in order to position the canvases in a more central position on the screen.
The variable shapeSelected is filled with a value from 1-3 depending on whether or not "A", "S" or "D" have been pressed, which is done using the keyPressed() function and the corresponding ASCII code for each letter. The same is done for "R", which I have used to 'reset' the program / clear the canvas, as it runs the setup() function again for the main canvas.
The function CustomShape() is used to draw the 3 different shapes, and has a number of values passed with it: x and y for the coordinates of the shape, size for the size of the shape, and the shapeSelected variable.

I have used a case statement on the shapeSelected that draws a different shape depending on its value, which is affected by pressing 'A', 'S' or 'D'.

If the value of shapeSelected is 1, then a series of rectangles and ellipses will be drawn.
If the value of shapeSelected is 2 then a nonagon will be drawn with the fill property changing between a random RGB colour and black. I accomplished this using a for-next loop (lines 95-102)

If the value of shapeSelected is 3 then a series of rectangles will be drawn and rotated so that they form a 'circle'
I also created a boolean array called selectedArray that contains 3 values which are false by default. selectedArray[0] is set to true when shapeSelected = 1 (when the 'A' key is pressed), and the other two values in the array are set to false. I have then repeated this for when the other two keys are pressed.

In order to draw the nonagon, I found a solution on the p5js website that allowed me to easily create polygons using the sin and cos functions, as well as the beginShape() and vertex() functions.
https://p5js.org/examples/form-regular-polygon.html

The other canvas displays which shape has been selected, as well as some instructions and information about the program
(whether it is 'running' or 'paused').
This is accomplished through the use of if statements in the draw() function that check to see if one of the values in selectedArray[] is true, if it is then the 'stroked' variable will be set to true, and passed in the hightlightedShape() function, which draws the 3 custom shapes, in a similar fashion to the CustomShape() function, except it will check to see if the 'stroked' value is true, and change the strokeWeight and stroke colour of the shape.
