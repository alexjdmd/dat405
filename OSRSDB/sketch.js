

// var url = 'https://spreadsheets.google.com/feeds/list/1FyM9xqawlVi5joBX230meyK6yyfsK9SC02Ocl579VLw/od6/public/values?alt=json';

//var url = 'https://sheets.googleapis.com/v4/spreadsheets/1FyM9xqawlVi5joBX230meyK6yyfsK9SC02Ocl579VLw/values/Prices?key=' + apiKey;
var osbapi = "https://storage.googleapis.com/osbuddy-exchange/summary.json"
var icon;
var itemName = [];
var itemPrice = [];
var itemQuantity =[];
var itemID = [];
var itemDesc = [];
var y = 0
var img = [];

function setup(){
  createCanvas(1280,720);
  frameRate(10)
  background(80);
  item()
  // noLoop();
}
var item = function(){


  var listButtons;
  var animButton;
  var resetButton;
  var visButton;
  var rBtPress = false
  var oreBtPress = false
  var listState = 0
  var id = 0
  var quantityButton
  var pricesButton
  var quanButton
  var priceButton

  loadJSON(osbapi,getData);

  drawButtons();

  function drawButtons(){
    resetButton = createButton('Reset')
    resetButton.position(10,670)
    resetButton.size(100,40)
    resetButton.mousePressed(resetPressed)

    listButtons = createButton('Show Lists')
    listButtons.position(10, 620)
    listButtons.size(100, 40)
    listButtons.mousePressed(drawListButtons)

    animButton = createButton('Graphs')
    animButton.position(10, 570)
    animButton.size(100,40)
    animButton.mousePressed(drawPQVisBtn)

    visButton = createButton('Visualise');
    visButton.position(10, 520);
    visButton.size(100,40)
    visButton.mousePressed(visualise)

    pricesButton = createButton('Prices')
    pricesButton.position(110,630)
    pricesButton.size(100,30)
    pricesButton.mousePressed(pricesPressed)

    quantityButton = createButton('Quantity')
    quantityButton.position(110,600)
    quantityButton.size(100,30)
    quantityButton.mousePressed(quantityPressed)



    pricesButton.hide()
    quantityButton.hide()
  }

  function drawListButtons(){
    rBtPress = false
    oreBtPress = false
    animButton.hide()
    visButton.hide()

    var runeButton = createButton('Runes')
    runeButton.position(10,630)
    runeButton.size(100,30)
    runeButton.mousePressed(runesPressed);

    var oresButton = createButton('Ores')
    oresButton.position(10,600)
    oresButton.size(100,30)
    oresButton.mousePressed(oresPressed)

    listButtons.hide()
  }

  function drawQuanPriceButtons(){
    pricesButton.show()
    quantityButton.show()
  }

  function drawPQVisBtn(){

    pricesButton.hide()
    quantityButton.hide()
    listButtons.hide()
    animButton.hide()
    visButton.hide()

    priceButton = createButton('Prices')
    priceButton.position(10,630)
    priceButton.size(100,30)
    priceButton.mousePressed(pricePress)

    quanButton = createButton('Quantity')
    quanButton.position(10,600)
    quanButton.size(100,30)
    quanButton.mousePressed(quanPress)
  }

  function getData(data){

    var oID = [554,555,556,557,558,559,560,561,562,563,564,449,436,444,440,447,442,438];
    var oCount = 0
    for (var i = 0; i< 18;i++){
      itemID[i] = oID[i];
      itemName[i] = data[itemID[i]].name;
      itemPrice[i] = data[itemID[i]].buy_average;
      itemQuantity[i] = data[itemID[i]].overall_quantity;
      oCount++
    }

  }

  function drawItems(x, y, id, name){
    icon = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_sprite.gif?id=" + id);
    icon.position(x,10+(y*50))
    fill(244,24,100);
    textSize(20);
    text(name,x+50,35+(y*50));
    y++
  }

  function drawPrices(x,y,price){
    text(price + " gp",x+200,35+(y*50))
  }

  function drawQuantity(x,y,quantity) {
    text(quantity, x+300, 35+(y*50))
  }

  function resetPressed(){
    background(80)
    y = 0;
    removeElements();
    drawButtons();
    listState = 0
  }

  function visualise(){
    var imageSize = 0
    for (var x = 0; x < 18; x++){
        imageSize = itemPrice[x]
        if (imageSize < 10){
          imageSize = imageSize * 10
        } else if (imageSize > 200) {
          imageSize = imageSize / 5
        }
        img[x] = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_big.gif?id=" + itemID[x])
        img[x].mouseClicked(itemPriceClicked)
        img[x].position(random(900),random(520))
        img[x].size(imageSize, imageSize)
        for (var n = 0; n> 18; n++){
          img[n].x = img[n].x + random(200)
          img[n].y = img[n].y + random(imageSize)
    }
  }

    listButtons.hide()
    animButton.hide()
    visButton.hide()
  }

  function pricePress(){
    quanButton.hide()
    priceButton.hide()
    visButton.hide()
    textSize(20)
    text("You can click on an icon in order to view its name and price.", 250, 700)
    for (var x = 0; x < 18; x++){
      for (var g = 0; g < itemPrice[x]/2; g++){
        img[x] = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_big.gif?id=" + itemID[x])
        img[x].mouseClicked(itemPriceClicked)
        img[x].position(x*70,g*1.25)
        img[x].size(80,80)
      }
    }

  }

  function quanPress(){
    quanButton.hide()
    priceButton.hide()
    visButton.hide()
    textSize(20)
    text("You can click on an icon in order to view its name and quantity.", 250, 700)
    for (var x = 0; x < 18; x++){
      for (var g = 0; g < itemQuantity[x]/10000; g++){
        img[x] = createImg("http://services.runescape.com/m=itemdb_oldschool/1545055248360_obj_big.gif?id=" + itemID[x])
        img[x].mouseClicked(itemQuanClicked)
        img[x].position(x*70,g*1.25)
        img[x].size(80,80)
      }
    }
  }

  function oresPressed(){
    drawQuanPriceButtons();
    if (oreBtPress == false && rBtPress == false){
      oreBtPress = true
      var oreCount = 0
      for (var n = 11; n< 18; n++){
        drawItems(10,oreCount,itemID[n],itemName[n])
        oreCount++
      }
      listState = 1
    } else if (listState == 3) {
      oreBtPress = true
      oreCount = 0
      for (var n = 11; n< 18; n++){
        if (oreCount < 3) {
          drawItems(400,oreCount+4,itemID[n],itemName[n])
          oreCount++
        } else {
          drawItems(800,oreCount-3,itemID[n],itemName[n])
          oreCount++
        }
      }
      listState = 2
    }
  }

  function runesPressed(){
    drawQuanPriceButtons();
    if (rBtPress == false && oreBtPress == false){
      rBtPress = true
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawItems(0,i,itemID[i],itemName[i])
        } else {
          drawItems(400,i-7,itemID[i],itemName[i])
        }
      }
      listState = 3
    } else if (oreBtPress == true && rBtPress == false) {
      rBtPress = true
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawItems(400,i,itemID[i],itemName[i])
        } else {
          drawItems(800,i-7,itemID[i],itemName[i])
        }
      }
      listState = 4
    }
  }

  function pricesPressed(){
    if (listState == 2 && rBtPress == true){
      listState = 5
    }
    switch(listState){
      case 1:
      var oreCount = 0
      for (var n = 11; n< 18; n++){
        drawPrices(10,oreCount,itemPrice[n])
        oreCount++
      }
      break;
      case 3:
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawPrices(0,i,itemPrice[i])
        } else {
          drawPrices(400,i-7,itemPrice[i])
        }
      }
      break;
      case 4:
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawPrices(400,i,itemPrice[i])
        } else {
          drawPrices(800,i-7,itemPrice[i])
        }
      }
      var oreCount = 0
      for (var n = 11; n< 18; n++){
        drawPrices(10,oreCount,itemPrice[n])
        oreCount++
      }
      break;
      case 5:
      oreCount = 0
      for (var n = 11; n< 18; n++){
        if (oreCount < 3) {
          drawPrices(400,oreCount+4,itemPrice[n])
          oreCount++
        } else {
          drawPrices(800,oreCount-3,itemPrice[n])
          oreCount++
        }
      }
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawPrices(0,i,itemPrice[i])
        } else {
          drawPrices(400,i-7,itemPrice[i])
        }
      }
      break;
    }
  }

  function quantityPressed(){
    if (listState == 2 && rBtPress == true){
      listState = 5
    }
    switch(listState){
      case 1:
      var oreCount = 0
      for (var n = 11; n< 18; n++){
        drawQuantity(10,oreCount,itemQuantity[n])
        oreCount++
      }
      break;
      case 3:
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawQuantity(0,i,itemQuantity[i])
        } else {
          drawQuantity(400,i-7,itemQuantity[i])
        }
      }
      break;
      case 4:
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawQuantity(400,i,itemQuantity[i])
        } else {
          drawQuantity(800,i-7,itemQuantity[i])
        }
      }
      var oreCount = 0
      for (var n = 11; n< 18; n++){
        drawQuantity(10,oreCount,itemQuantity[n])
        oreCount++
      }
      break;
      case 5:
      oreCount = 0
      for (var n = 11; n< 18; n++){
        if (oreCount < 3) {
          drawQuantity(400,oreCount+4,itemQuantity[n])
          oreCount++
        } else {
          drawQuantity(800,oreCount-3,itemQuantity[n])
          oreCount++
        }
      }
      for (var i = 0; i < 11; i++){
        if (i<7){
          drawQuantity(0,i,itemQuantity[i])
        } else {
          drawQuantity(400,i-7,itemQuantity[i])
        }
      }
      break;
    }
  }
}



function itemPriceClicked(){
  for (var g = 0; g<18;g++){
    var d = dist(mouseX, mouseY, img[g].x+ 20,img[g].y + 20)
    if(d< 40){
      alert(itemName[g] + " : " + itemPrice[g] + " GP", 100, 100)
    }
  }
}

function itemQuanClicked(){
  for (var g = 0; g<18;g++){
    var d = dist(mouseX, mouseY, img[g].x+ 20,img[g].y + 20)
    if(d< 40){
      alert(itemName[g] + " : " + itemQuantity[g] + " Items", 100, 100)
    }
  }
}
