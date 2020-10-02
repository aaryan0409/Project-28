
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1;
var boy;
var stone1;
var tree1,tree2,tree3;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
   boyimage=loadImage("Images/boy.png");
   treeimage=loadImage("Images/tree.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(400,675,800,50);
	stone1=new Stone(100,300,20);
	boy=createSprite(150,600,20,20);
	boy.addImage(boyimage);
	boy.scale=0.10;
	tree1=new Tree(500,640,50,20);
	tree2=new Tree(495,550,20,200);
	tree3=new Tree(525,550,20,200);
	mango1=new Mango(300,400,40);
	mango2=new Mango(540,430,40);
	mango3=new Mango(590,450,40);
	mango4=new Mango(560,410,40);
	mango5=new Mango(580,490,40);
	rope1=new Rope(stone1.body,{x:100,y:540});
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  
   ground1.display();           
   stone1.display();
   //tree1.display();
   imageMode(CENTER);
   image(treeimage,500,460,500,400);
   //tree2.display();
   //tree3.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   rope1.display();
   
  
  drawSprites();
 
}

function mouseDragged(){
     Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope1.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyposiiton=lmango.body.position;
	stoneBodyposition=lstone.body.position;
	var distance=dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposiiton.x,mangoBodyposiiton.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		console.log(distance);
	}
	

}

function keyPressed(){
	if (keyCode===32){
		//Matter.Body.setPosition(stone1,{x:100,y:300});
		rope1.attach(stone1.body);
	}
}