var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score, lives;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");

  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //score variable value is 0
  score = 0;

  //lives remaining variable value is 3
  lives = 3;
}

function draw() {
 background(0);

  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));

  //if (World.frameCount % 100 == 0) {
    //if (select_balloon == 1) {
     // redBalloon();
   // } else if (select_balloon == 2) {
     // blueBalloon();
   // } else if (select_balloon == 3) {
     // greenBalloon();
    //} else {
    //  pinkBalloon();
   // }
  //}


   // OR 


  if (World.frameCount % 100 == 0) { 
    switch(select_balloon){
      case 1: redBalloon();
      break;
      case 2: blueBalloon();
      break;
      case 3: greenBalloon();
      break;
      case 4: pinkBalloon();
      break;
      default: break;
  }
  }



    drawSprites();

  //shows score
  textSize(20);
  text("Score: "+score,270,30);
  score = score + Math.round(frameCount/100);
  
  //shows lives
  text("Lives: "+lives,70,30);
  
  //Shows different texts for game based on random number
  var rand = Math.round(random(1,5));
  textSize(30);
  if (World.frameCount % 60 == 0) { 
  switch(rand){
    case 1: text("You Got It!!",100,200);
    break;
    case 2: text("Keep Trying",100,200);
    break;
    case 3: text("Pop The Balloons",130,200);
    break;
    case 4: text("Keep Going!!",100,200);
    break;
    case 5: text("Don't Give Up",100,200);
    break;
    default: break;
  }
  }
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  //write code for spwaning green balloons
  //write code for spwaning blue balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 6;
  pink.lifetime = 150;
  pink.scale = 1.2;
}
