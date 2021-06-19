const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2;

var gameState = "onSling";
var bg = "sprites/bg1.png";


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

  //making the boxes
    box1 = new Box(600,375,30,40);
    box2 = new Box(600,335,30,40);
    box3 = new Box(570,375,30,40);
    box4 = new Box(570,335,30,40);
    box5 = new Box(540,375,30,40);
    box6 = new Box(630,375,30,40);
    box7 = new Box(510,375,30,40);
    box8 = new Box(540,335,30,40);
    box9 = new Box(660,375,30,40);
    box10 = new Box(630,335,30,40);
    box11 = new Box(600,295,30,40);
    box12 = new Box(570,295,30,40);

    //making the ball 
    ball = new Ball(900,200,60,60); 
    
    //making the rope
    rope = new SlingShot(ball.body,{x:700,y:10});
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    
    ground.display();

    //displaying the boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    //displaying the ball
    ball.display();
    
    //displaying the rope
    rope.display();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
