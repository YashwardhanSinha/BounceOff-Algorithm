var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
    fixedRect = createSprite(400, 200, 30, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;

    movingRect = createSprite(500,200,80,30);
    movingRect.shapeColor  = "green"
    movingRect.debug = true;

    gameObject1 = createSprite(100,100,50,50);
    gameObject1.shapeColor  = "green"
    gameObject1.debug = true;
    gameObject1.velocityX = 4;

    gameObject2 = createSprite(700,100,50,50);
    gameObject2.shapeColor  = "green"
    gameObject2.debug = true;
    gameObject2.velocityX = -4;

}

function draw() {
  background(0);  

  //movingRect.x = mouseX;
 // movingRect.y = mouseY;

  if (isTouching(gameObject1,gameObject2)) {
   gameObject1.shapeColor = "blue";
   gameObject2.shapeColor = "blue";
  }
  else {
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

 bounceOff(gameObject1,gameObject2);

  drawSprites();
}



