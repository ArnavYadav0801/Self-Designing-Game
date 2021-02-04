 //adding the components for physics engine
var introImage
var canvas, backgroundImage;
var INTRO = 0
var PLAY =1;
var END = 2;
var gameState = INTRO;
var form;
var back;
var playButton
var playButtonImage;
var spaceship;
var spaceshipImage;
var asteroid, asteroidImage, asteroidGroup;
var bullet, bulletImage , bulletsGroup;
var introImage;

function preload(){

  introImage = loadImage("Images/background(2).png")
  backgroundImage = loadImage("Images/background.jpg")
  playButtonImage = loadImage("Images/PlayButton.png")
  spaceshipImage = loadImage("Images/spaceship(2).png")
  asteroidImage = loadImage("Images/asteroid.png")
  bulletImage = loadImage("Images/bullet.png")
}


function setup(){
 

//creating the canvas
  canvas = createCanvas(windowWidth-20, windowHeight-30);

   //creating the engine and adding it to the world
  //background(backgroundImage)
  background(introImage)
  back = createSprite(windowWidth/2 , windowHeight/10 , windowWidth-100, windowHeight-50);
  back.addImage(backgroundImage);
  back.scale = 5;
  back.visible = false

  spaceship = createSprite(200,400,200,200)
  spaceship.addImage(spaceshipImage)
  spaceship.scale =1;
  spaceship.visible = false;

  playButton = createSprite(displayWidth/2-40,displayHeight/2+120,20,20);
  playButton.addImage(playButtonImage);
  playButton.scale = 0.6

 
  asteroidGroup = new Group();
  bulletsGroup = new Group(); 
  
}


function draw(){

  if(gameState === INTRO){
    form();
  }

  if(mousePressedOver(playButton)){
    gameState = PLAY
    playButton.visible = false;
  }

  if(gameState === PLAY){
    back.velocityY = -25
    back.visible = true;
   spaceship.visible = true;

   if(back.y< windowHeight ){
    back.y = back.height /2;
   }

if(keyDown(LEFT_ARROW)){
spaceship.x = spaceship.x -20;
}
if(keyDown(RIGHT_ARROW)){
  spaceship.x = spaceship.x +20;
  }

  if(bulletsGroup.isTouching(asteroidGroup)){
    bulletsGroup.destroyEach();
    asteroidGroup.destroyEach();
  }


spawnbullets();
spawnAsteroids();
  }

  drawSprites();
  
}
function spawnbullets(){
  if(keyWentDown("space")){
    bullet = createSprite(spaceship.x,spaceship.y);
    bullet.addImage("bullet",bulletImage);
    bullet.velocityY= -20;
    bullet.scale = 0.05;
    bulletsGroup.add(bullet);

  }


}


function spawnAsteroids(){
if(frameCount % 40 === 0){
  var rand = Math.round(random(5,1200))
  var rand1 = Math.round(random(10,1200))
asteroid = createSprite(rand1,rand,30,30)
asteroid.scale= 0.8;
asteroid.addImage(asteroidImage)
  asteroid.velocityY = 25;
  asteroidGroup.add(asteroid)
}

}

function form(){
  textSize(50);
  fill("white")
  text("Seize The Space",displayWidth/2-120 ,40);

  textSize(30);
  fill("white")
  text("There is one warrior who started training before you but all other warriors teased him because he was short heighted.... ",displayWidth/2-450,140);
  text("Then after lossing control he vanished somewhere we were not able to him... ",displayWidth/2 -450, 180);
  text("Then one day his mesasge came . Save your planet from coming hot asteroids....",displayWidth/2 - 450, 220);
  text("These asteroids can slice our planets in half",displayWidth/2 -450, 260);
  text("Go stop him with your spaceship ",displayWidth/2-450, 300 );


  textSize(35)
  fill("white")
  text("SO BEST OF LUCK !!!",displayWidth/2-150, 420 );
}