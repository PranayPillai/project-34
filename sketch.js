const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var superhero,superheroImage;
var monster,monsterImage;
var backGround,backGroundImage;

function preload() {
//preload the images here
  //superheroImage = loadAnimation("images/Superhero-01.png,images/Superhero-02.png");
  

 // monsterImage = loadAnimation("images/Monster-01.png,images/Monster-02.png");
  

  backGroundImage = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  backGround.addImage(backGroundImage);
  // create sprites here
  ground = new Ground(3000,750,3000,20);

}

function draw() {
  background(0);

}

