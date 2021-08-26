const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var engine, world;

var bgImg, boy1Img, boy2Img;
var boy1;
var maxSnow = 70;
var snowfall = [];

function preload(){
  bgImg = loadImage("snow2.jpg");
  boy1Img = loadImage("boy1.png");
  boy2Img = loadImage("boy2.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
   
  createCanvas(800,400);
  boy1 = createSprite(650, 350, 50, 50);
  boy1.addImage(boy1Img);
  boy1.scale = 0.2;

  boy2 = createSprite(0, 350, 50, 50);
  boy2.velocityX = 3;
  boy2.addImage(boy2Img);
  boy2.scale = 0.2;

  if(frameCount % 380 === 0){
    for(var i = 0; i < maxSnow; i++){
      snowfall.push(new Snow(random(0, 800), (random(0, 100))))
    }
  }

}

function draw() {
  Engine.update(engine)
  background(bgImg);  
  drawSprites();

  for(var i = 0; i< maxSnow; i++){
    snowfall[i].display();
    snowfall[i].updateY();
  }
}
