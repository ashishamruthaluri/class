
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
let groundObj
let leftSide
let rightSide
let engine
let world


function preload()
{
	
}

function setup() {
	createCanvas(1500,1500);


	engine = Engine.create();
	world = engine.world;



	groundObj=new Ground(width/2,670,width,20)
	leftSide=new Ground(1100,600,20,120)
	rightSide=new Ground(1300,600,20,120)

	var ball_options={
isStatic:true,
restitution:3,
friction:0,
density:1.2

}


	//Create the Bodies Here.
	ball = Bodies.circle(500,60,10,ball_options)
	World.add(world,ball)

	
  
}


function draw() {
 
  background(0);
  ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20)
 keyPressed()
 groundObj.display()
 leftSide.display()
 rightSide.display()
 Engine.update(engine);

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85 ,y:-85})
	}
	
}
