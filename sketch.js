
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var garbage1;


function setup() {
	createCanvas(1600, 900);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,825,width,20);
	dustbinObj=new dustbin(1200,800);
     garbage1=new paper(400,800);
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  garbage1.display();
  groundObject.display();
  dustbinObj.display();
   
}
function keyPressed(){
   
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(garbage1.body,garbage1.body.position,{x:130,y:-145});
	}

}
if(garbage1.positionx=== 800)[
	Matter.body.setStatic(true),
]
