const Engine = Matter.Engine; // the force that puts physical laws into bodies

const World = Matter.World; // world for all the bodies
const Bodies = Matter.Bodies; // soul creation for body

var engine,world,body; // objects of above classes
var ground;



function setup() {
  createCanvas(800,800);

  engine = Engine.create(); // object gets created with class properties;
  world = engine.world; // attaching world object to engine object
 

  var options = {
    isStatic : true
  }

  var options2 = {
    
    'restitution':1.6
  }
// creating the soul part for dummy body
   body = Bodies.rectangle(600,100,50,50,options2); // soul part
   World.add(world,body); // adds the soul into the world

   ground = Bodies.rectangle(400,750,800,20,options); // soul part (ground)
   World.add(world,ground); // adds the soul into the world (ground)

   console.log("hello");
   console.log(body);
   console.log(ground);
}

function draw() {
  background(0);  

  Engine.update(engine); // updates the engine object

  rectMode(CENTER); // changing the rect dynamics to center point - for every rect body
  rect(body.position.x,body.position.y,50,50);// dummy bodies ( will not follow engine unless there is soul attached)

  rect(ground.position.x,ground.position.y,800,20); // ground
}

//. add matter.js into index.html
// nameSpacing - addes const Bodies = Matter.Bodies....etc
// create objects for classes

// -------------setup---------------------

// create engine, world objects and attach them to their classes
// create a soul
// add soul to the world

// ----------------draw function-------------

// update the engine
//make the dummy body's rectMode to CENTER - poditioning
// make the dummy body
// attach dummy to dsoul by rewriting the x, y positions