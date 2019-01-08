//Global Variables
var osbapi = "https://storage.googleapis.com/osbuddy-exchange/summary.json";
var icon;
var itemName = [];
var itemPrice = [];
var itemQuantity =[];
var itemID = [];
var itemDesc = [];
var y = 0;
var img = [];
var itemImage = [];
var visPrice;
var visQuan;

//Setup function
function setup(){
  createCanvas(1280,720);
  frameRate(10)
  background(80);
  osItems();
}
//Main function
function osItems(){

//Local Variables
  var listButtons;
  var graphButton;
  var resetButton;
  var visButton;
  var rBtPress = false;
  var oreBtPress = false;
  var listState = 0;
  var id = 0;
  var quantityButton;
  var pricesButton;

//Setting each value in the array "itemImage" to the url of the corresponding image
  itemImage[0] = "https://vignette.wikia.nocookie.net/2007scape/images/5/5d/Fire_rune_detail.png/revision/latest";
  itemImage[1] = "https://vignette.wikia.nocookie.net/2007scape/images/7/74/Water_rune_detail.png/revision/latest";
  itemImage[2] = "https://vignette.wikia.nocookie.net/2007scape/images/f/f3/Air_rune_detail.png/revision/latest";
  itemImage[3] = "https://vignette.wikia.nocookie.net/2007scape/images/7/72/Earth_rune_detail.png/revision/latest";
  itemImage[4] = "https://vignette.wikia.nocookie.net/2007scape/images/5/55/Mind_rune_detail.png/revision/latest";
  itemImage[5] = "https://vignette.wikia.nocookie.net/2007scape/images/b/bd/Body_rune_detail.png/revision/latest";
  itemImage[6] = "https://vignette.wikia.nocookie.net/2007scape/images/7/7d/Death_rune_detail.png/revision/latest";
  itemImage[7] = "https://vignette.wikia.nocookie.net/2007scape/images/e/ef/Nature_rune_detail.png/revision/latest";
  itemImage[8] = "https://vignette.wikia.nocookie.net/2007scape/images/a/ae/Chaos_rune_detail.png/revision/latest";
  itemImage[9] = "https://vignette.wikia.nocookie.net/2007scape/images/0/0f/Law_rune_detail.png/revision/latest";
  itemImage[10] = "https://vignette.wikia.nocookie.net/2007scape/images/d/dc/Cosmic_rune_detail.png/revision/latest";
  itemImage[11] = "https://vignette.wikia.nocookie.net/2007scape/images/3/35/Adamantite_ore_detail.png/revision/latest";
  itemImage[12] = "https://vignette.wikia.nocookie.net/2007scape/images/f/f2/Copper_ore_detail.png/revision/latest";
  itemImage[13] = "https://vignette.wikia.nocookie.net/2007scape/images/c/c8/Gold_ore_detail.png/revision/latest";
  itemImage[14] = "https://vignette.wikia.nocookie.net/2007scape/images/6/6a/Iron_ore_detail.png/revision/latest";
  itemImage[15] = "https://vignette.wikia.nocookie.net/2007scape/images/b/ba/Mithril_ore_detail.png/revision/latest";
  itemImage[16] = "https://vignette.wikia.nocookie.net/2007scape/images/4/4e/Silver_ore_detail.png/revision/latest";
  itemImage[17] = "https://vignette.wikia.nocookie.net/2007scape/images/b/b3/Tin_ore_detail.png/revision/latest";


  //Load the data from the JSON file provided by the API.
  loadJSON(osbapi,getData);

  //Calls the function drawButtons, which populates the screen with a GUI
  drawButtons();


  function drawButtons(){
    textSize(20);
    fill(244,24,100);
    text("Return to this screen", 120, 700);
    text("Display the items in a list format", 120, 650);
    text("Display the items in a graph",120,600);
    text("Display all of the items on the screen",120,550);

//Creating a button that is stored in the variable resetButton that runs the function resetPressed when clicked
    resetButton = createButton('Reset');
    resetButton.position(10,670);
    resetButton.size(100,40);
    resetButton.mousePressed(resetPressed);

//Creating a button that is stored in the variable listButtons that runs the function drawListButtons when clicked
    listButtons = createButton('Show Lists');
    listButtons.position(10, 620);
    listButtons.size(100, 40);
    listButtons.mousePressed(drawListButtons);

//Creating a button that is stored in the variable graphButton that runs the function drawPQVisBtn when clicked
    graphButton = createButton('Graphs');
    graphButton.position(10, 570);
    graphButton.size(100,40);
    graphButton.mousePressed(drawPQVisBtn);

//Creating a button that is stored in the variable visButton that runs the function visualise when clicked
    visButton = createButton('Visualise');
    visButton.position(10, 520);
    visButton.size(100,40);
    visButton.mousePressed(visualise);

//Creating a button that is stored in the variable pricesButton that runs the function pricesPressed when clicked
    pricesButton = createButton('Prices');
    pricesButton.position(110,630);
    pricesButton.size(100,30);
    pricesButton.mousePressed(pricesPressed);

//Creating a button that is stored in the variable quantityButton that runs the function quantityPressed when clicked
    quantityButton = createButton('Quantity');
    quantityButton.position(110,600);
    quantityButton.size(100,30);
    quantityButton.mousePressed(quantityPressed);

//Hides the price and quantity buttons after they have been created so that they don't block the other buttons
    pricesButton.hide();
    quantityButton.hide();
  }

  function drawListButtons(){
//Local Variables set to false whenever the button is clicked (reset to default state)
    rBtPress = false;
    oreBtPress = false;
//Hides the other buttons so they don't interfere
    graphButton.hide();
    visButton.hide();
    listButtons.hide();

//Sets the background to a grey colour so that the text that was previously on it is hidden
    background(80);

//creates the button runeButton, which displays all of the runes in a list when clicked
    var runeButton = createButton('Runes');
    runeButton.position(10,630);
    runeButton.size(100,30);
    runeButton.mousePressed(runesPressed);

//creates the button oresButton, which displays all of the ores in a list when clicked
    var oresButton = createButton('Ores');
    oresButton.position(10,600);
    oresButton.size(100,30);
    oresButton.mousePressed(oresPressed);
  }

  function drawQuanpricesButtons(){
    //displays the prices and quantity buttons when either oresButton or the runeButton is clicked
    pricesButton.show();
    quantityButton.show();
  }

  function drawPQVisBtn(){
//Hides the other buttons so they don't interfere
    pricesButton.hide();
    quantityButton.hide();
    listButtons.hide();
    graphButton.hide();
    visButton.hide();

//Sets the background to grey in order to hide any of the text that was previously on it.
    background(80);

//sets the variable pricesButton to call the function pricePress when clicked
    pricesButton = createButton('Prices');
    pricesButton.position(10,630);
    pricesButton.size(100,30);
    pricesButton.mousePressed(pricePress);

//sets the variable quantityButton to call the function quanPress when clicked
    quantityButton = createButton('Quantity');
    quantityButton.position(10,600);
    quantityButton.size(100,30);
    quantityButton.mousePressed(quanPress);
  }

//The function that is called when the JSON is loaded into the program, it stores all of the data presented in different arrays
  function getData(data){
//Creates a variable oID which stores all of the relevent IDs of the items that I will use in the program
    var oID = [554,555,556,557,558,559,560,561,562,563,564,449,436,444,440,447,442,438];
//A for-next loop that populates all of the values in the arrays with the relevent data, based on the ID of the item (stored in oID)
    for (var i = 0; i< 18;i++){
      itemID[i] = oID[i];
      itemName[i] = data[itemID[i]].name;
      itemPrice[i] = data[itemID[i]].buy_average;
      itemQuantity[i] = data[itemID[i]].overall_quantity;

    }
  }
//The function that is called when drawing the items in the list, it has the parameters x,y,id, and name passed to it.
  function drawItems(x, y, id, name){
//Gets the icon of the relevent item from the Runescape website based its ID.
    icon = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_sprite.gif?id=" + id);
    icon.position(x,10+(y*50));
    fill(244,24,100);
    textSize(20);
    text(name,x+50,35+(y*50));
    y++;
  }
//A function that draws the price of the item depending on the id that is passed to it.
  function drawPrices(x,y,price){
    fill(244,24,100);
    text(price + " gp",x+200,35+(y*50));
  }
//A function that draws the quantity of the item depending on the id that is passed to it.
  function drawQuantity(x,y,quantity) {
    fill(244,24,100);
    text(quantity, x+300, 35+(y*50));
  }

//The function that is called when the reset button is pressed
  function resetPressed(){
    //sets the background to grey
    background(80);
//resets the height variable used when drawing
    y = 0;
//removes the buttons, and redraws them using the function drawButtons
    removeElements();
    drawButtons();
//resets the listState
    listState = 0;
  }

//the function that is called when the visualise button is pressed
  function visualise(){
//sets the background to grey to hide any text that was previously on it
    background(80);

//creates a button that calls the function priceDraw when pressed
    visPrice = createButton('Prices');
    visPrice.position(10,630);
    visPrice.size(100,30);
    visPrice.mousePressed(priceDraw);

//creates a button that calls the function quanDraw when pressed
    visQuan = createButton('Quantity');
    visQuan.position(10,600);
    visQuan.size(100,30);
    visQuan.mousePressed(quanDraw);

//hides the other buttons so they don't interfere
    listButtons.hide();
    graphButton.hide();
    visButton.hide();
  }

//the function that is called when the pricesButton is pressed (draws the price graph)
  function pricePress(){
//hides the other buttons so that they don't interfere
    quantityButton.hide();
    pricesButton.hide();
    visButton.hide();
//sets the text colour to a light pink/red
    fill(244,24,100);
    textSize(20);
    text("You can click on an icon in order to view its name and price.", 200, 700);
//cycles through all of the items in the array, and draws a "graph" based on the price of the item, the price of the item = the number of items drawn.
    for (var x = 0; x < 18; x++){
      for (var g = 0; g < itemPrice[x]/2; g++){
        img[x] = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_big.gif?id=" + itemID[x]);
        img[x].mouseClicked(itemPriceClicked);
        img[x].position(x*70,g*1.25);
        img[x].size(80,80);
      }
    }

  }
//the function that is called when the quanButton is pressed (draws the quantity graph)
  function quanPress(){
    quantityButton.hide();
    pricesButton.hide();
    visButton.hide();
    fill(244,24,100);
    textSize(20);
    text("You can click on an icon in order to view its name and quantity.", 200, 700);

//cycles through all of the items in the array, and draws a "graph" based on the quantity of the item, the quantity of the item = the number of items drawn.
    for (var x = 0; x < 18; x++){
      for (var g = 0; g < itemQuantity[x]/10000; g++){
        img[x] = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_big.gif?id=" + itemID[x]);
//creates an event if one of the items is clicked
        img[x].mouseClicked(itemQuanClicked);
        img[x].position(x*70,g*1.25);
        img[x].size(80,80);
      }
    }
  }

//The function that is called when the ores button is pressed, it displays the icons and names of the ores
  function oresPressed(){
    //draws the price and quantity buttons
    drawQuanpricesButtons();
    //if the neither button has been pressed then the ores are displayed on the left hand side of the canvas
    if (oreBtPress == false && rBtPress == false){
      oreBtPress = true;
      var oreCount = 0;
    //draws the icons and names of the ores (the last 7 values in the array itemID)
      for (var n = 11; n< 18; n++){
        drawItems(10,oreCount,itemID[n],itemName[n]);
        oreCount++;
      }
      listState = 1;
    //if the runes button has been pressed then the ores will be drawn on the middle/right hand side of the canvas
    } else if (listState == 3) {
      oreBtPress = true;
      oreCount = 0;
      for (var n = 11; n< 18; n++){
        if (oreCount < 3) {
          drawItems(400,oreCount+4,itemID[n],itemName[n]);
          oreCount++;
        } else {
          drawItems(800,oreCount-3,itemID[n],itemName[n]);
          oreCount++;
        }
      }
      listState = 2;
    }
  }

//The function that is called when the runes button is pressed, it displays the icons and names of the runes
  function runesPressed(){
    //draws the price and quantity buttons
    drawQuanpricesButtons();
    //if the neither button has been pressed then the runes are displayed on the left hand side of the canvas
    if (rBtPress == false && oreBtPress == false){
      rBtPress = true;
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawItems(0,i,itemID[i],itemName[i]);
        } else {
          drawItems(400,i-7,itemID[i],itemName[i]);
        }
      }
      listState = 3;
//if the ores button has been pressed then the runes will be drawn on the middle / right hand side of the canvas
    } else if (listState == 1) {
      rBtPress = true;
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawItems(400,i,itemID[i],itemName[i]);
        } else {
          drawItems(800,i-7,itemID[i],itemName[i]);
        }
      }
      listState = 4;
    }
  }
//the function that is called when the prices button is pressed
  function pricesPressed(){
    //if the ores button has been pressed and the runes button has been pressed then listState = 5
    if (listState == 2 && rBtPress == true){
      listState = 5;
    }
    //a case statement that displays the prices at different locations on the canvas depending on which combinations of buttons have been pressed
    switch(listState){
      case 1:
      var oreCount = 0;
      for (var n = 11; n< 18; n++){
        drawPrices(10,oreCount,itemPrice[n]);
        oreCount++;
      }
      break;
      case 3:
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawPrices(0,i,itemPrice[i]);
        } else {
          drawPrices(400,i-7,itemPrice[i]);
        }
      }
      break;
      case 4:
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawPrices(400,i,itemPrice[i]);
        } else {
          drawPrices(800,i-7,itemPrice[i]);
        }
      }
      var oreCount = 0;
      for (var n = 11; n< 18; n++){
        drawPrices(10,oreCount,itemPrice[n]);
        oreCount++;
      }
      break;
      case 5:
      oreCount = 0;
      for (var n = 11; n< 18; n++){
        if (oreCount < 3) {
          drawPrices(400,oreCount+4,itemPrice[n]);
          oreCount++;
        } else {
          drawPrices(800,oreCount-3,itemPrice[n]);
          oreCount++;
        }
      }
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawPrices(0,i,itemPrice[i]);
        } else {
          drawPrices(400,i-7,itemPrice[i]);
        }
      }
      break;
    }
  }

//the function that is called when the quantity button is pressed
  function quantityPressed(){
    //if the ores button has been pressed and the runes button has been pressed then listState = 5
    if (listState == 2 && rBtPress == true){
      listState = 5;
    }
    //a case statement that displays the quantities at different locations on the canvas depending on which combinations of buttons have been pressed
    switch(listState){
      case 1:
      var oreCount = 0;
      for (var n = 11; n< 18; n++){
        drawQuantity(10,oreCount,itemQuantity[n]);
        oreCount++;
      }
      break;
      case 3:
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawQuantity(0,i,itemQuantity[i]);
        } else {
          drawQuantity(400,i-7,itemQuantity[i]);
        }
      }
      break;
      case 4:
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawQuantity(400,i,itemQuantity[i]);
        } else {
          drawQuantity(800,i-7,itemQuantity[i]);
        }
      }
      var oreCount = 0;
      for (var n = 11; n< 18; n++){
        drawQuantity(10,oreCount,itemQuantity[n]);
        oreCount++;
      }
      break;
      case 5:
      oreCount = 0;
      for (var n = 11; n< 18; n++){
        if (oreCount < 3) {
          drawQuantity(400,oreCount+4,itemQuantity[n]);
          oreCount++;
        } else {
          drawQuantity(800,oreCount-3,itemQuantity[n]);
          oreCount++;
        }
      }
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawQuantity(0,i,itemQuantity[i]);
        } else {
          drawQuantity(400,i-7,itemQuantity[i]);
        }
      }
      break;
    }
  }
}


//the function that is called when an image is clicked in the graph mode
function itemPriceClicked(){
  //a for next loop that checks the position of the mouse relative to the different images, and will display an alert with the relevent information
  for (var g = 0; g<18;g++){
    var d = dist(mouseX, mouseY, img[g].x+ 20,img[g].y + 20);
    if(d< 40){
      alert(itemName[g] + " : " + itemPrice[g] + " GP", 100, 100);
    }
  }
}

//the function that is called when an image is clicked in the graph mode
function itemQuanClicked(){
  //a for next loop that checks the position of the mouse relative to the different images, and will display an alert with the relevent information
  for (var g = 0; g<18;g++){
    var d = dist(mouseX, mouseY, img[g].x+ 20,img[g].y + 20);
    if(d< 40){
      alert(itemName[g] + " : " + itemQuantity[g] + " Items", 100, 100);
    }
  }
}

//the function that visualises the items based on their price
function priceDraw(){
  var imageSize = 0;
  //hides the other button so that you can't interact with it.
  visQuan.hide();
  //a for-next loop that sets the size of the item based on the price
  for (var s = 0; s < 18; s++){
      imageSize = itemPrice[s];
      if (imageSize < 10){
        imageSize = imageSize * 15;
      } else if (imageSize > 200) {
        imageSize = imageSize / 3;
      }
      for (var g = 0;g<6; g++){
      //draws the images previously stored in the array img[]
      img[s] = createImg(itemImage[s]);
      img[s].mouseClicked(itemPriceClicked);
      img[s].size(imageSize, imageSize);
      //draws them at a random set of coordinates on the canvas
      img[s].position(random(1280)-random(imageSize*1.25),random(620) - random(imageSize*1.25));
      //sets bounds for the images
      if (img[s].x <= 1280){
        img[s].position(img[s].x - imageSize, img[s].y);
      }
      if (img[s].y <= 720) {
        img[s].position(img[s].x, img[s].y - imageSize/1.25);
      }
    }
}
}
//the function that visualises the items based on their quantity
function quanDraw(){
  var imageSize = 0;
  //hides the other button so that you can't interact with it.
  visPrice.hide();
  //sets the position of the quantity button so that there is more canvas space
  visQuan.position(10,630);
  for (var s = 0; s < 18; s++){
      imageSize = itemQuantity[s]/1000;
      if (imageSize < 10){
        imageSize = imageSize *5;
      }
      if (imageSize > 300) {
        imageSize = imageSize / 10;
      }
      for (var g = 0;g<6; g++){
      img[s] = createImg(itemImage[s]);
      img[s].mouseClicked(itemQuanClicked);
      img[s].size(imageSize, imageSize);
      img[s].position(random(1280)-random(imageSize*1.25),random(620) - random(imageSize*1.25));
      if (img[s].x <= 1280){
        img[s].position(img[s].x - imageSize, img[s].y);
      }
      if (img[s].y <= 720) {
        img[s].position(img[s].x, img[s].y - imageSize/1.25);
      }
    }
}
}
