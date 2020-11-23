var ball,img,paddle;

function preload() {
  ball = loadImage("ball.png");
  paddle = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  ball1= createSprite(200,200,15,15);
  ball1.velocityX = 9;
  ball1.addImage("ball01",ball);
  
  paddle1 = createSprite(380,200,10,40);
  paddle1.addImage("paddle01",paddle);

}

function draw() {
  background(205,153,0);

  edges = createEdgeSprites();
  
  ball1.bounceOff(edges[0]);
  ball1.bounceOff(edges[2]);
  ball1.bounceOff(edges[3]);
  ball1.bounceOff(paddle1);

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  paddle1.bounceOff(edges[2]);
  paddle1.bounceOff(edges[3]);
  
  
  if(keyDown(UP_ARROW))
  {
     paddle1.y = paddle1.y - 5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle1.y = paddle1.y + 5;
  }
  changeBallDirection();
  drawSprites();
  
}

function changeBallDirection () {
  if (ball1.isTouching(paddle1)){
    ball1.velocityY = Math.round(random(-10,10));
  }
}