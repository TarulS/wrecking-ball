const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
function setup() {
	createCanvas(3000, 800);
	engine = Engine.create();
	world = engine.world;
	
}


function draw() {
	Engine.update(engine)
    background(180);
 
 
}

