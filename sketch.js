var iss;
var spacebg;
var issImg, spacebgImg;
var spacecraft;
var spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var hasDocked = false;

function preload(){
issImg = loadImage("./assets/iss.png");
spacebgImg = loadImage("./assets/spacebg.jpg");
spacecraft1 = loadImage("./assets/spacecraft1.png");
spacecraft2 = loadImage("./assets/spacecraft2.png");
spacecraft3 = loadImage("./assets/spacecraft3.png");
spacecraft4 = loadImage("./assets/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  spacebg = createSprite(200, 200, 800, 800);
  spacebg.addImage("spacebgimage", spacebgImg);
  iss = createSprite(200, 200, 200, 200)
  iss.addImage("issimage", issImg);
  iss.scale = 0.7;
  spacecraft = createSprite(200, 200, 100, 100);
  spacecraft.scale = 0.2;
}

function draw() {
  background(255,255,255); 
  spacecraft.addImage ("spacecraftimage", spacecraft1);
  spacecraft.addImage("spacecraftimage2", spacecraft2);
  spacecraft.addImage("spacecraftimage3", spacecraft3);
  spacecraft.addImage("spacecraftimage4", spacecraft4);

  if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y - 2;
    spacec
  }
  
  if(keyDown(DOWN_ARROW)){
    spacecraft.y = spacecraft.y + 2;
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x - 2;
  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x + 2;
  }
  

  if(spacecraft.isTouching(iss)){
    fill("white");
    stroke(255);
    textSize(15);
    text ("You docked the craft! Nice work!", 20, 20);
  }

  drawSprites();
}

