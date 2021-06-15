var tower,towerImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;
var ghost,ghostImage;
var invisible,invisGroup;

function preload(){
towerImage=loadImage("tower.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
ghostImage=loadImage("ghost-jumping.png");
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=1;
  doorGroup=new Group()
  climberGroup=new Group()
  ghost=createSprite(300,300,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.5;
  invisGroup=new Group();
}

function draw(){
  background("black")
  if(tower.y>400){
    tower.y=300;
  }
  if(keyDown("d")){
    ghost.x=ghost.x-5;
  }
  if(keyDown("a")){
    ghost.x=ghost.x+5;
  }
  if(keyDown("space")){
    ghost.velocityY=-3;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  if(climberGroup.isTouching(ghost)){
   ghost.velocityY=0;
  }
  if(invisGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
  }
  spawnDoor()
  drawSprites()
  
}

function spawnDoor(){
  if(frameCount%240===0){
    door=createSprite(200,-50);
    door.addImage(doorImage);
    climber=createSprite(200,10);
    climber.addImage(climberImage);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    climber.x=door.x
    climber.velocityY=1;
    climber.lifetime=500;
    climberGroup.add(climber);
    door.lifetime=500;
    doorGroup.add(door);
    ghost.depth=door.depth+1;
    invisible=createSprite(200,15)
    invisGroup.add(invisible);
    invisible.width=climber.width;
    invisible.height=2;
    invisible.x=climber.x;
    invisible.velocityY=1;
}}