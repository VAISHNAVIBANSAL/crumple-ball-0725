class Circle {
  constructor(x, y, r) {
    var options = {
      density: 1.5,
      friction: 1.0,
      restitution: 0.5,
    };
    this.radius = r;
    this.image = loadImage("sprites/paper.png")
    this.body = Bodies.circle(x, y, r, options);

    // var angle = this.body.angle;

    World.add(world, this.body);
    console.log(this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //Body.translate(this.body, { x: pos.x, y: pos.y });
    //Body.rotate(this.body, angle);
    strokeWeight(1);
    stroke("purple");
    fill("pink");
    imageMode(CENTER);
    scale(0.5);
    image(this.image,this.radius, this.radius);
    
    //rect(0,0, this.radius, this.radius);
    //P5.Circle.circle(0,0, this.radius);
    pop();
  }
}
class Wood {
  constructor(x, y, w, h, a) {
    var options = {
      isStatic: true,
      restitution: 0.8,
      friction: 0.3,
      density: 1,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    Matter.Body.setAngle(this.body, a);
    this.width = w;
    this.height = h;
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
