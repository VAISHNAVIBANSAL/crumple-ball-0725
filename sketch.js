const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle, wood1, wood2, wood3, ground;
var world, engine, pimg;
function preload() {}

function setup() {
  createCanvas(900, 700);

  engine = Engine.create();
  world = engine.world;
  pimg = loadImage("sprites/dustbin.png");
  //Create the Bodies Here.
  circle = new Circle(250, 620, 10);

  wood1 = new Wood(850, 620, 10, 100, 0);
  wood2 = new Wood(775, 670, 10, 160, 90);
  wood3 = new Wood(700, 620, 10, 100, 0);
  ground = Bodies.rectangle(400, 640, 800, 20, { isStatic: true });
  World.add(world, ground);
  Engine.run(engine);
}

function draw() {
  background('red');
  createEdgeSprites();
  Engine.update(engine);

  circle.display();
  
  wood1.display();
  wood2.display();
  wood3.display();
  scale(2);
  image(pimg, 350, 280, 75, 60);
  rectMode(CENTER);
  fill('black');
  rect(ground.position.x, ground.position.y-20, 900, 10);
  //circle.bounceOff(rightEdge);
  if (keyDown("space")) {
    Matter.Body.applyForce(circle.body, circle.body.position, {
      x: 18,
      y: -18,
    });
    console.log("pressed key down");
  }
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(circle.body, circle.body.position, {
      x: 15,
      y: -15,
    });
    console.log("pressed key down");
  }
}
