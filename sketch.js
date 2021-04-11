var canvas,surface1,surface2,surface3,surface4;
var music,box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 surface1=createSprite(75,580,200,20);
 surface1.shapeColor="blue";

 surface2=createSprite(295,580,200,20);
 surface2.shapeColor="yellow";

 surface3=createSprite(515,580,200,20);
 surface3.shapeColor="green";

 surface4=createSprite(740,580,200,20);
 surface4.shapeColor="red";
    //create box sprite and give velocity
 box=createSprite(random(20,750),100,25,25);
 box.shapeColor="black";
 box.velocityX=4;
 box.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 
 edges=createEdgeSprites();
 box.bounceOff(edges);
 


    //add condition to check if box touching surface and make it box
  if(box.isTouching(surface1)&& box.bounceOff(surface1)){
      box.shapeColor="blue";
      music.play();
    }
  if(box.isTouching(surface2)&& box.bounceOff(surface2)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
  }
  if(box.isTouching(surface3)&& box.bounceOff(surface3)){
    box.shapeColor="green";
    music.play();

}
if(box.isTouching(surface4)&& box.bounceOff(surface4)){
    box.shapeColor="red";
    music.play();
    
}
    drawSprites();
}
