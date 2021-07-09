var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage,leaf,leafImage,orangeLeaf,orangeLeafImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png");
  leafImage=loadImage("leaf.png");
  orangeLeafImage=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX=3;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;
  drawSprites();
//calling the functions
createApple();
createLeaf();
createOrangeLeaf();
}

function createApple(){
 if (frameCount%80===0) {
apple=createSprite(90,100,20,10);
apple.addImage(appleImage);
apple.scale=0.1;
apple.velocityY=3;
apple.y=Math.round(random(10,20));
apple.depth=rabbit.depth
rabbit.debth+=1
 }
}

function createLeaf(){
  if(frameCount%80===0){
  leaf=createSprite(200,30,20,10);
  leaf.addImage(leafImage);
  leaf.scale=0.1;
  leaf.velocityY=2
  leaf.y=Math.round(random(10,30));
  leaf.depth=rabbit.depth
  rabbit.depth+=1
}
}

function createOrangeLeaf(){
if (frameCount%80===0){
orangeLeaf=createSprite(350,100,20,10);
orangeLeaf.addImage(orangeLeafImage);
orangeLeaf.scale=0.1;
orangeLeaf.velocityY=2;
orangeLeaf.y=Math.round(random(20,40));
orangeLeaf.depth=rabbit.depth
rabbit.depth+=1;


}
}

  
  



