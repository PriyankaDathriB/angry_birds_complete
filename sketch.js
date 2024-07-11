const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball,ground;
var myEngine, myWorld;
var box1,box2,box3;
var bird;

function setup() {
    myEngine = Engine.create();
    myWorld = myEngine.world;
    var canvas = createCanvas(500, 500);
    
   

    ground = Bodies.rectangle(250,450,500,10,{isStatic:true});
    World.add(myWorld,ground);
    rectMode(CENTER);

    box1 = new Box(300,200,50,50);
    box2 = new Box(350,200,50,50);
    box3 = new Box(325,100,50,50);
    bird = new Bird(100,100,20);
}

function draw() {
    background("black");
    Engine.update(myEngine);
    
    var pos = ground.position;
    rect(pos.x,pos.y,500,10);

    box1.display();
    box2.display();
    box3.display();
    bird.display();
}