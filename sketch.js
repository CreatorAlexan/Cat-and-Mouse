var bgImg, bg;
var cat, mouse;
var catChill,catWalk,catStand,catHappy;
var mouseHappy, mouseImg, mouseTease, mouseAssist;
var PLAY = 1; END = 0;
var gameState = PLAY;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");

    catChill = loadAnimation("images/cat1.png");
    catWalk = loadAnimation("images/cat2.png");
    catStand = loadAnimation("images/cat3.png");
    catHappy = loadAnimation("images/cat4.png");

    mouseHappy = loadAnimation("images/mouse1.png");
    mouseImg = loadAnimation("images/mouse2.png");
    mouseTease = loadAnimation("images/mouse3.png");
    mouseAssist = loadAnimation("images/mouse4.png");
}

function setup(){
    //1000,800
    createCanvas(1000,800);
    bg = createSprite(500,400);
    bg.addImage(bgImg);
    bg.scale = 1.5;
    //create tom and jerry sprites here
    mouse = createSprite(200,750);
    mouse.addAnimation("regular",mouseImg);
    mouse.scale = 0.1;

    cat = createSprite(800,700);
    cat.addAnimation("chilling",catChill);
    cat.scale = 0.2;

    //mouse.debug = true;
    //cat.debug = true;

    mouse.setCollider("rectangle",0,0,800,1000);
    cat.setCollider("rectangle",0,0,1250,1500);

}

function draw() {
    background(180);
 if(gameState == PLAY){
    if(keyDown("left")){
        keyLeft();
    }
    if(keyWentUp("left")){
        keyUp();
    }
    if (cat.isTouching(mouse)){
        gameState = END;
    }
}
   if(gameState == END){
    happy();
    cat.collide(mouse);
   }
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    console.log();
}


function keyLeft(){

  //For moving and changing animation write code here
  mouse.addAnimation("teasing",mouseTease);
  mouse.changeAnimation("teasing");
  cat.scale = 0.3;
  cat.y = 685;
  cat.addAnimation("walking",catWalk);
  cat.changeAnimation("walking");
  cat.x = cat.x -2;
}

function keyUp(){
    mouse.changeAnimation("regular");
    cat.addAnimation("standing",catStand);
    cat.changeAnimation("standing");
}

function happy(){
    mouse.addAnimation("yay",mouseHappy);
    mouse.changeAnimation("yay");
    cat.addAnimation("woohoo",catHappy);
    cat.changeAnimation("woohoo");
}