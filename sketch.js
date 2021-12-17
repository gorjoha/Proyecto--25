
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papelbola;
var papelbolacirculo;
var papelGroup;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	papelGroup=new Group();
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	papelbola=new Papel(140,10,70,70);
	papelbolacirculo=new papell(200,70,70);
//	papelGroup.add(papelbolacirculo);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
//  papelbola.display();
  papelbolacirculo.display();
  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(papelbola.body,papelbola.body.position,{x:130,y:-145});
	Matter.Body.applyForce(papelbolacirculo.body,papelbolacirculo.body.position,{x:130,y:-145});
  }
  if(papelbolacirculo.x>141){
	  papelbolacirculo.x=999;
	//  papelbola.position.x=papelbolacirculo.position.x
	//  papelbola.position.y=papelbolacirculo.position.y
	  //papelGroup.destroyEach();
  }
}