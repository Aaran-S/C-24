const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(820,300);
    box2 = new Box(620,300);
    box3 = new Box(820,180);
    box4 = new Box(620,180);
    box5 = new Box(720,80);

    pig1 = new Pig(720,300);
    pig2 = new Pig(720,180);

    log1 = new Log(720,250,300,PI/2);
    log2 = new Log(720,150,300,PI/2);
    log3 = new Log(670,80,150,PI/6);
    log4 = new Log(770,80,150,PI/-6);

    bird1 = new Bird(160,270);

    
    ground = new Ground(600,380,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    console.log(mouseX + "  " + mouseY);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}