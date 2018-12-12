var icon;
var itemName = [];
var itemPrice = [];
var itemQuantity =[];
var itemID = [];
var y = 0

// var url = 'https://spreadsheets.google.com/feeds/list/1FyM9xqawlVi5joBX230meyK6yyfsK9SC02Ocl579VLw/od6/public/values?alt=json';

//var url = 'https://sheets.googleapis.com/v4/spreadsheets/1FyM9xqawlVi5joBX230meyK6yyfsK9SC02Ocl579VLw/values/Prices?key=' + apiKey;
var osbapi = "https://storage.googleapis.com/osbuddy-exchange/summary.json"

function setup(){
  createCanvas(1280,720);
  background(80);
  jsonData();
  noLoop();
}

function jsonData(){
  var listButtons;
  var resetButton;
  var rBtPress = false
  var oreBtPress = false
  var listState = 0


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
  }

  function drawListButtons(){
    rBtPress = false
    oreBtPress = false

    var runeButton = createButton('Runes')
    runeButton.position(10,630)
    runeButton.size(100,30)
    runeButton.mousePressed(runesPressed);

    var oresButton = createButton('Ores')
    oresButton.position(10,600)
    oresButton.size(100,30)
    oresButton.mousePressed(oresPressed)

    var pricesButton = createButton('Prices')
    pricesButton.position(110,630)
    pricesButton.size(100,30)
    pricesButton.mousePressed(pricesPressed)

    var quantityButton = createButton('Quantity')
    quantityButton.position(110,600)
    quantityButton.size(100,30)
    quantityButton.mousePressed(quantityPressed)

    listButtons.hide()
  }

  loadJSON(osbapi,getData);

  function getData(data){

    var rID = 554
    var rCount = 0
    do {
      itemID[rCount] = rID
      itemName[rCount] = data[itemID[rCount]].name;
      itemPrice[rCount] = data[itemID[rCount]].buy_average;
      itemQuantity[rCount] = data[itemID[rCount]].overall_quantity;
      rID++
      rCount++
    } while (rID < 565);

    var oID = [449,436,444,440,447,451,442,438];
    var oCount = 0
    for (var i = 13; i< 21;i++){
      itemID[i] = oID[oCount];
      itemName[i] = data[itemID[i]].name;
      itemPrice[i] = data[itemID[i]].buy_average;
      itemQuantity[i] = data[itemID[i]].overall_quantity;
      oCount++
    }

  }

  function drawItems(x, y, id, name){
    icon = createImg("http://services.runescape.com/m=itemdb_oldschool/1544450463596_obj_sprite.gif?id=" + id);
    icon.position(x,10+(y*50))
    fill(244,24,100);
    textSize(20)
    text(name,x+50,35+(y*50))
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

  function oresPressed(){
    if (oreBtPress == false && rBtPress == false){
      oreBtPress = true
      var oreCount = 0
      for (var n = 13; n< 21; n++){
        drawItems(10,oreCount,itemID[n],itemName[n])
        oreCount++
      }
    listState = 1
    } else if (rBtPress == true && oreBtPress == false) {
      oreBtPress = true
      oreCount = 0
      for (var n = 13; n< 21; n++){
        if (oreCount < 5) {
        drawItems(400,oreCount+3,itemID[n],itemName[n])
        oreCount++
      } else {
        drawItems(800,oreCount-5,itemID[n],itemName[n])
        oreCount++
      }
    }
    listState = 2
    }
  }

  function runesPressed(){
    if (rBtPress == false && oreBtPress == false){
      rBtPress = true
      for (var i = 0; i < 11; i++){
        if (i<8){
        drawItems(0,i,itemID[i],itemName[i])
      } else {
        drawItems(400,i-8,itemID[i],itemName[i])
    }
    }
    listState = 3
  } else if (oreBtPress == true && rBtPress == false) {
      rBtPress = true
      for (var i = 0; i < 11; i++){
        if (i<8){
        drawItems(400,i,itemID[i],itemName[i])
      } else {
        drawItems(800,i-8,itemID[i],itemName[i])
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
      for (var n = 13; n< 21; n++){
        drawPrices(10,oreCount,itemPrice[n])
        oreCount++
      }
      break;
      case 3:
      for (var i = 0; i < 11; i++){
        if (i<8){
        drawPrices(0,i,itemPrice[i])
      } else {
        drawPrices(400,i-8,itemPrice[i])
    }
    }
      break;
      case 4:
      for (var i = 0; i < 11; i++){
        if (i<8){
        drawPrices(400,i,itemPrice[i])
      } else {
        drawPrices(800,i-8,itemPrice[i])
    }
    }
    var oreCount = 0
    for (var n = 13; n< 21; n++){
      drawPrices(10,oreCount,itemPrice[n])
      oreCount++
    }
      break;
      case 5:
      oreCount = 0
      for (var n = 13; n< 21; n++){
        if (oreCount < 5) {
        drawPrices(400,oreCount+3,itemPrice[n])
        oreCount++
      } else {
        drawPrices(800,oreCount-5,itemPrice[n])
        oreCount++
      }
    }
      for (var i = 0; i < 11; i++){
        if (i<8){
        drawPrices(0,i,itemPrice[i])
      } else {
        drawPrices(400,i-8,itemPrice[i])
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
        for (var n = 13; n< 21; n++){
          drawQuantity(10,oreCount,itemQuantity[n])
          oreCount++
        }
        break;
        case 3:
        for (var i = 0; i < 11; i++){
          if (i<8){
          drawQuantity(0,i,itemQuantity[i])
        } else {
          drawQuantity(400,i-8,itemQuantity[i])
      }
      }
        break;
        case 4:
        for (var i = 0; i < 11; i++){
          if (i<8){
          drawQuantity(400,i,itemQuantity[i])
        } else {
          drawQuantity(800,i-8,itemQuantity[i])
      }
      }
      var oreCount = 0
      for (var n = 13; n< 21; n++){
        drawQuantity(10,oreCount,itemQuantity[n])
        oreCount++
      }
        break;
        case 5:
        oreCount = 0
        for (var n = 13; n< 21; n++){
          if (oreCount < 5) {
          drawQuantity(400,oreCount+3,itemQuantity[n])
          oreCount++
        } else {
          drawQuantity(800,oreCount-5,itemQuantity[n])
          oreCount++
        }
      }
        for (var i = 0; i < 11; i++){
          if (i<8){
          drawQuantity(0,i,itemQuantity[i])
        } else {
          drawQuantity(400,i-8,itemQuantity[i])
      }
      }
        break;
    }
  }
}
