
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var bobDiameter;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
 bob1 =new Bob(100,600,150);
 bob2 =new Bob(200,600,150);
 bob3 =new Bob(300,600,150);
 bob4 =new Bob(400,600,150);
 bob5 =new Bob(500,600,150);
 
 roof=new Roof(300,100,500,50);

 rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
 rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0);
 rope3=new Rope(bob3.body,roof.body,-bobDiameter*2,0);
 rope4=new Rope(bob4.body,roof.body,-bobDiameter*2,0);
 rope5=new Rope(bob5.body,roof.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  fill("purple");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  fill("white");
  roof.display();

  fill("black");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



