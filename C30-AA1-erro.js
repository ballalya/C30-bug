const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

var corda;
var fruta;

var frucorda;

var rabbit;
var melon;
var back;

var colin;

var button;

function preload(){
  rabbit = loadImage("Rabbit-01.png");
  melon = loadImage("melon.png");
  back = loadImage("background.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  button = createImg("cut_btn.png");
  button.position(250,50);
  button.size(40,50);
  button.mouseClicked(drop);

  ground = new Ground(200,680,600,20);

  corda = new Rope(8,{x:260, y:35});

  var fruta_options = {
    density:0.001
  }
  fruta = Bodies.circle(300,300,15, fruta_options);
  Matter.Composite.add(corda.body, fruta);

  frucorda = new Link(corda, fruta);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  imageMode(CENTER);

  colin = createSprite(300, 600, 10,10);
  colin.addImage(rabbit);
  colin.scale = 0.3;

  
}

function draw() 
{
  background(51);
  image(back, width/2, height/2, 500,700);

  push();
  imageMode(CENTER);
  if(fruta!=null){
    image(melon, fruta.position.x, fruta.position.y, 70,70);
  }
  pop();

  ground.show();

  corda.show();
  
  Engine.update(engine);
  

 
drawSprites();   
}

function drop(){
  rope.break();
  frucorda.detach();
  frucorda = null;
  
}