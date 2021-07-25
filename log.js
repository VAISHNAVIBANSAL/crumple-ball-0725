const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

class Wood {
  constructor(x, y, w, h, a) {
    var options = {
      restitution: 0.8,
      friction: 0.3,
      density: 1,
    };

    this.body = Bodies.rectangle(x, y, 20, h, options);
    this.Image = loadImage("sprites/dustbin png.png");
    Matter.Body.setAngle(this.body, a);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("green");
    stroke("yellow");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
