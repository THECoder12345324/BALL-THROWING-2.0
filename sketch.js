var START = 0;
var THROW = 1;
var INSTRUCTIONS = 2;
var END = 3;
var gamestate = START;
var power, shoot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 700);
	background(0);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 480, 20);
	ground = new Ground(600, 690, 1200, 10);
	dustbin = new DustBin(780, 650, 920, 650, 850, 690, 20, 100, 20, 100, 140, 20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  if (gamestate === START) {
	  textSize(50);
	  fill("white");
	  text("Welcome to Ball Throwing", 300, 100);
	  textSize(30);
	  text("Press Enter to continue", 425, 200);
  }
  if (gamestate === START && keyDown("ENTER")) {
	  gamestate = INSTRUCTIONS;
  }
  if (gamestate === INSTRUCTIONS) {
	  textSize(30);
	  fill("white");
	  text("Press Right Arrow Key to Gain Power", 200, 170);
	  text("Let go at just the right time to make paper go in dustbin", 200, 270);
	  text("If you miss, reset by pressing r, as it will show in the corner", 200, 370);
	  text("Press s to Start", 300, 520);
  }
  if (gamestate === INSTRUCTIONS && keyDown("s")) {
	  gamestate = THROW;
	  power = 0;
	  shoot = 1;
  }
  if (gamestate === THROW) {
	paper.display();
	dustbin.display();
	
	if (keyDown("RIGHT_ARROW") && shoot === 1) {
		power += 0.5;
	}
	textSize(40);
	fill("white");
	text("POWER: " + power, 900, 40);
	textSize(40);
	fill("white");
	text("Press r to reset", 100, 40);
	if (paper.body.position.x < 920 && paper.body.position.x > 780 && paper.body.position.y > 647) {
		textSize(40);
		fill("white");
	  text("You Made it In!!!", 500, 100);
	  }
  }
  if (keyWentUp("RIGHT_ARROW") && gamestate === THROW && shoot === 1) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:power * 2, y:-power * 2});
	  shoot = 2;
	  
  }
  if (keyDown("r")) {
	  reset();
  }
  drawSprites();
 
}
function reset() {
	power = 0;
	shoot = 1;
	Matter.Body.setPosition(paper.body, {x: 50, y: 480});
}


