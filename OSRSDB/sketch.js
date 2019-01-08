var osbapi = "https://storage.googleapis.com/osbuddy-exchange/summary.json";
var icon;
var itemName = [];
var itemPrice = [];
var itemQuantity =[];
var itemID = [];
var itemDesc = [];
var y = 0;
var img = [];
var runeName = [];
var visPrice;
var visQuan;

function setup(){
  createCanvas(1280,720);
  frameRate(10)
  background(80);
  item();
}
var item = function(){


  var listButtons;
  var animButton;
  var resetButton;
  var visButton;
  var rBtPress = false;
  var oreBtPress = false;
  var listState = 0;
  var id = 0;
  var quantityButton;
  var pricesButton;
  var quanButton;
  var priceButton;


  runeName[0] = "https://vignette.wikia.nocookie.net/2007scape/images/5/5d/Fire_rune_detail.png/revision/latest";
  runeName[1] = "https://vignette.wikia.nocookie.net/2007scape/images/7/74/Water_rune_detail.png/revision/latest";
  runeName[2] = "https://vignette.wikia.nocookie.net/2007scape/images/f/f3/Air_rune_detail.png/revision/latest";
  runeName[3] = "https://vignette.wikia.nocookie.net/2007scape/images/7/72/Earth_rune_detail.png/revision/latest";
  runeName[4] = "https://vignette.wikia.nocookie.net/2007scape/images/5/55/Mind_rune_detail.png/revision/latest";
  runeName[5] = "https://vignette.wikia.nocookie.net/2007scape/images/b/bd/Body_rune_detail.png/revision/latest";
  runeName[6] = "https://vignette.wikia.nocookie.net/2007scape/images/7/7d/Death_rune_detail.png/revision/latest";
  runeName[7] = "https://vignette.wikia.nocookie.net/2007scape/images/e/ef/Nature_rune_detail.png/revision/latest";
  runeName[8] = "https://vignette.wikia.nocookie.net/2007scape/images/a/ae/Chaos_rune_detail.png/revision/latest";
  runeName[9] = "https://vignette.wikia.nocookie.net/2007scape/images/0/0f/Law_rune_detail.png/revision/latest";
  runeName[10] = "https://vignette.wikia.nocookie.net/2007scape/images/d/dc/Cosmic_rune_detail.png/revision/latest";
  runeName[11] = "https://vignette.wikia.nocookie.net/2007scape/images/3/35/Adamantite_ore_detail.png/revision/latest";
  runeName[12] = "https://vignette.wikia.nocookie.net/2007scape/images/f/f2/Copper_ore_detail.png/revision/latest";
  runeName[13] = "https://vignette.wikia.nocookie.net/2007scape/images/c/c8/Gold_ore_detail.png/revision/latest";
  runeName[14] = "https://vignette.wikia.nocookie.net/2007scape/images/6/6a/Iron_ore_detail.png/revision/latest";
  runeName[15] = "https://vignette.wikia.nocookie.net/2007scape/images/b/ba/Mithril_ore_detail.png/revision/latest";
  runeName[16] = "https://vignette.wikia.nocookie.net/2007scape/images/4/4e/Silver_ore_detail.png/revision/latest";
  runeName[17] = "https://vignette.wikia.nocookie.net/2007scape/images/b/b3/Tin_ore_detail.png/revision/latest";

  loadJSON(osbapi,getData);

  drawButtons();

  function drawButtons(){
    textSize(20);
    fill(244,24,100);
    text("Return to this screen", 120, 700);
    text("Display the items in a list format", 120, 650);
    text("Display the items in a graph",120,600);
    text("Display all of the items on the screen",120,550);

    resetButton = createButton('Reset');
    resetButton.position(10,670);
    resetButton.size(100,40);
    resetButton.mousePressed(resetPressed);

    listButtons = createButton('Show Lists');
    listButtons.position(10, 620);
    listButtons.size(100, 40);
    listButtons.mousePressed(drawListButtons);

    animButton = createButton('Graphs');
    animButton.position(10, 570);
    animButton.size(100,40);
    animButton.mousePressed(drawPQVisBtn);

    visButton = createButton('Visualise');
    visButton.position(10, 520);
    visButton.size(100,40);
    visButton.mousePressed(visualise);

    pricesButton = createButton('Prices');
    pricesButton.position(110,630);
    pricesButton.size(100,30);
    pricesButton.mousePressed(pricesPressed);

    quantityButton = createButton('Quantity');
    quantityButton.position(110,600);
    quantityButton.size(100,30);
    quantityButton.mousePressed(quantityPressed);



    pricesButton.hide();
    quantityButton.hide();
  }

  function drawListButtons(){
    rBtPress = false;
    oreBtPress = false;
    animButton.hide();
    visButton.hide();

    background(80);

    var runeButton = createButton('Runes');
    runeButton.position(10,630);
    runeButton.size(100,30);
    runeButton.mousePressed(runesPressed);

    var oresButton = createButton('Ores');
    oresButton.position(10,600);
    oresButton.size(100,30);
    oresButton.mousePressed(oresPressed);

    listButtons.hide();
  }

  function drawQuanPriceButtons(){
    pricesButton.show();
    quantityButton.show();
  }

  function drawPQVisBtn(){

    background(80);

    pricesButton.hide();
    quantityButton.hide();
    listButtons.hide();
    animButton.hide();
    visButton.hide();

    priceButton = createButton('Prices');
    priceButton.position(10,630);
    priceButton.size(100,30);
    priceButton.mousePressed(pricePress);

    quanButton = createButton('Quantity');
    quanButton.position(10,600);
    quanButton.size(100,30);
    quanButton.mousePressed(quanPress);
  }

  function getData(data){

    var oID = [554,555,556,557,558,559,560,561,562,563,564,449,436,444,440,447,442,438];
    var oCount = 0;
    for (var i = 0; i< 18;i++){
      itemID[i] = oID[i];
      itemName[i] = data[itemID[i]].name;
      itemPrice[i] = data[itemID[i]].buy_average;
      itemQuantity[i] = data[itemID[i]].overall_quantity;
      oCount++;
    }

  }

  function drawItems(x, y, id, name){
    icon = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_sprite.gif?id=" + id);
    icon.position(x,10+(y*50));
    fill(244,24,100);
    textSize(20);
    text(name,x+50,35+(y*50));
    y++;
  }

  function drawPrices(x,y,price){
    fill(244,24,100);
    text(price + " gp",x+200,35+(y*50));
  }

  function drawQuantity(x,y,quantity) {
    fill(244,24,100);
    text(quantity, x+300, 35+(y*50));
  }

  function resetPressed(){
    background(80);
    y = 0;
    removeElements();
    drawButtons();
    listState = 0;
  }

  function visualise(){
    background(80);

    visPrice = createButton('Prices');
    visPrice.position(10,630);
    visPrice.size(100,30);
    visPrice.mousePressed(priceDraw);

    visQuan = createButton('Quantity');
    visQuan.position(10,600);
    visQuan.size(100,30);
    visQuan.mousePressed(quanDraw);

    listButtons.hide();
    animButton.hide();
    visButton.hide();
  }

  function pricePress(){
    quanButton.hide();
    priceButton.hide();
    visButton.hide();
    fill(244,24,100);
    textSize(20);
    text("You can click on an icon in order to view its name and price.", 200, 700);
    for (var x = 0; x < 18; x++){
      for (var g = 0; g < itemPrice[x]/2; g++){
        img[x] = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_big.gif?id=" + itemID[x]);
        img[x].mouseClicked(itemPriceClicked);
        img[x].position(x*70,g*1.25);
        img[x].size(80,80);
      }
    }

  }

  function quanPress(){
    quanButton.hide();
    priceButton.hide();
    visButton.hide();
    fill(244,24,100);
    textSize(20);
    text("You can click on an icon in order to view its name and quantity.", 200, 700);
    for (var x = 0; x < 18; x++){
      for (var g = 0; g < itemQuantity[x]/10000; g++){
        img[x] = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_big.gif?id=" + itemID[x]);
        img[x].mouseClicked(itemQuanClicked);
        img[x].position(x*70,g*1.25);
        img[x].size(80,80);
      }
    }
  }

  function oresPressed(){
    drawQuanPriceButtons();
    if (oreBtPress == false && rBtPress == false){
      oreBtPress = true;
      var oreCount = 0;
      for (var n = 11; n< 18; n++){
        drawItems(10,oreCount,itemID[n],itemName[n]);
        oreCount++;
      }
      listState = 1;
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

  function runesPressed(){
    drawQuanPriceButtons();
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
    } else if (oreBtPress == true && rBtPress == false) {
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

  function pricesPressed(){
    if (listState == 2 && rBtPress == true){
      listState = 5;
    }
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

  function quantityPressed(){
    if (listState == 2 && rBtPress == true){
      listState = 5;
    }
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



function itemPriceClicked(){
  for (var g = 0; g<18;g++){
    var d = dist(mouseX, mouseY, img[g].x+ 20,img[g].y + 20);
    if(d< 40){
      alert(itemName[g] + " : " + itemPrice[g] + " GP", 100, 100);
    }
  }
}

function itemQuanClicked(){
  for (var g = 0; g<18;g++){
    var d = dist(mouseX, mouseY, img[g].x+ 20,img[g].y + 20);
    if(d< 40){
      alert(itemName[g] + " : " + itemQuantity[g] + " Items", 100, 100);
    }
  }
}

function priceDraw(){
  var imageSize = 0;
  visQuan.hide();
  for (var s = 0; s < 18; s++){
      imageSize = itemPrice[s];
      if (imageSize < 10){
        imageSize = imageSize * 15;
      } else if (imageSize > 200) {
        imageSize = imageSize / 3;
      }
      for (var g = 0;g<6; g++){
      img[s] = createImg(runeName[s]);
      img[s].mouseClicked(itemPriceClicked);
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
function quanDraw(){
  var imageSize = 0;
  visPrice.hide();
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
      img[s] = createImg(runeName[s]);
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
