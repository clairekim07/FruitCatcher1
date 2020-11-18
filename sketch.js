var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var player, form,game;
var player1,player2, player2_img;
var players;
var virus,mask;
var virusGroup,maskGroup;
var virus_img, mask_img;
var virus2_img, mask2_img;
var player_img;
var score = 0;
var score2 = 0;

function preload(){
  back_img = loadImage("images/back.png");
  player_img = loadImage("images/female.png");
  player2_img = loadImage("images/safe.png");
  virus_img = loadImage("images/virus.png");
  mask_img = loadImage("images/mask.png");
  virus2_img = loadImage("images/virus2.png");
  mask2_img = loadImage("images/hand.png");
  
  virusGroup = new Group();
  maskGroup = new Group();
}
function setup() {
  createCanvas(displayWidth, displayHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  player1 = createSprite(200,displayHeight);
  player1.addImage(player_img);
  player1.scale = .2;
  player1.debug = true;
  player1.setCollider("rectangle",0,0,player1.width,player1.height);
  

  player2 = createSprite(800,displayHeight);
  player2.addImage(player2_img);
  player2.scale = .2;
  
  player2.debug = true;
  player2.setCollider("rectangle",0,0,player2.width,player2.height);

  players=[player1,player2];
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   
   spawnVirus();
   spawnMask();
   drawSprites();
   fill("black");
   textSize(20);
   text("score: " + score,displayWidth/4,displayHeight/4);
   text("score: " + score2,displayWidth/4 + 200,displayHeight/4);

}
function spawnVirus(){
  if (frameCount % 20 === 0 && gameState === 1) {
    virus = createSprite(random(100, displayWidth), 0, 100, 100);
    virus.velocityY = 6;
    virus.scale = .05;
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: virus.addImage("virus",virus_img);
        break;
        case 2: virus.addImage("virus",virus2_img);
        break;
    }
    virusGroup.add(virus);
    virus.lifetime = displayHeight/virus.velocityY;
    
}
}

function spawnMask(){
  if (frameCount % 20 === 0 && gameState === 1) {
    mask = createSprite(random(100, displayWidth), 0, 100, 100);
    mask.velocityY = 6;
    mask.scale = .05;
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: mask.addImage("mask", mask_img);
        break;
        case 2: mask.addImage("mask", mask2_img);
        break;
    }
    maskGroup.add(mask);
    mask.lifetime = displayHeight/mask.velocityY;
    
}
}