const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function preload() {

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400, 390, 800, 20);
  stand1=new Ground(500,240,30,40);
  stand2=new Ground();

  //level three bottom
  block1=new Block(330,235,30,40);
  block2=new Block(360,235,30,40);
  block3=new Block(390,235,30,40);
  block4=new Block(420,235,30,40);
  block5=new Block(450,235,30,40);
  //level two middle
  block6=new Block(360,195,30,40);
  block7=new Block(390,195,30,40);
  block8=new Block(420,195,30,40);
  //level one top
  block9=new Block(390,155,30,40);

  //level four 
  block10=new Block();
  block11=new Block();
  block12=new Block();
  block13=new Block();
  block14=new Block();
  block15=new Block();
  block16=new Block();
  //level three bottom
  block17=new Block();
  block18=new Block();
  block19=new Block();
  block20=new Block();
  block21=new Block();
  //level two middle
  block22=new Block();
  block23=new Block();
  block24=new Block();
  //level one top
  block25=new Block();

  slingshot=new Slingshot(this.polygon,{x:100,y:200})


}

function draw() {
  background(255,255,255);  

  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();

  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  slingshot.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}