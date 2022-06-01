var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for(var i=0;i<=width;i+=80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
  }
  for(var i=75;i<=width;i+=50){
    plinkos.push(new Plinko(i,75))
  }
  for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  for(var i=0;i<divisions.length;i++){
    divisions[i].display()
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
}