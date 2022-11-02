const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  ground=new Ground(200,390,400,20)
  left_wall=new Ground(10,200,20,400)
  right_wall=new Ground(390,200,20,400)
  ceiling=new Ground(200,10,400,20)
  var balloption={
    restitution: 0.5,
    friction: 0.2
  }
  ball=Bodies.circle(200,300,10,balloption)
  World.add(world,ball) 
    
  rectMode(CENTER);
  ellipseMode(RADIUS);
 button1=createImg("push.png") 
 button1.position(220,30)
 button1.size(50,50)
 button1.mouseClicked(hforce)
}



function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  left_wall.display()
  right_wall.display()
  ceiling.display()
  ellipse(ball.position.x,ball.position.y,20)
}
function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.0001,y:-0.0001})

}
