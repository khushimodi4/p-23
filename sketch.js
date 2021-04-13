var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	// create package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	// create helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	// create ground sprite white color rect at the end 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Physics Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	// Box x and y values
 	boxPosition=width/2-100
 	boxY=610;

	// left block of box
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

	// physics engine to left block of box
 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

	 // base block of box
 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

	 // physics engine to base block of box
 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

	 // right block of box
 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

	 // physics engine to right block of box
 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(0);

  
  
  Engine.update(engine);
// linking physics Engine
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  drawSprites(); 
 
}

function keyPressed(){
	console.log(keyCode);
	if (keyCode===37){
		helicopterSprite.x = helicopterSprite.x-20;
		translation = {x:-20,y:0};
		Matter.Body.translate(packageBody, translation)
	}else if (keyCode===39){
		helicopterSprite.x = helicopterSprite.x+20;
		translation = {x:20,y:0};
		Matter.Body.translate(packageBody, translation)
	} else if (keyCode===40){
		Matter.Body.setStatic(packageBody,false);
	}
}