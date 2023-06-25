const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bg, tower, towerimg, cannon, cannonimg;

function preload()
{
  bg = loadImage("assets/background.gif");
  towerimg = loadImage ("assets/tower.png");
  //cannonimg = loadImage ("assets/cannon_base.jpg")
  }

function setup() {
  createCanvas(1200,600);
  
  engine = Engine.create();

  world = engine.world;
  angle = PI/4;
  tower = new Tower(50,180,140, 300);
  cannon = new Cannon(30, 130, 60,40, angle)
  
    //rectMode(CENTER);
  //ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image (bg, 0, 0, 1200, 600);


  tower.display();
  cannon.display();
  Engine.update(engine);

 }

