var world,engine;
var particles,plinko;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos = [];
var divisions = [];
var particles = [];
var divisionsHeight = 150;

var score = 0;
var gameState = 'start';
var turns = 0;
var count = 0;
var score1 = false;
var score2 = false;
var score3 = false;
var particle;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,800);

  ground = new Ground(width/2,height,width,20);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for(var j = 75; j<= width; j = j+50){
    plinkos.push(new Plinko(j ,75))
  }
  for(var j = 50; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }
  for(var j = 75; j<= width; j = j+50){
    plinkos.push(new Plinko(j ,275))
  }
  for(var j = 50; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,375))
  }
  // for(var j = 75; j<= width-10; j = j+50){
  //   plinkos.push(new Plinko(j ,275))
  // }
  // for(var j = 50; j<= width-10; j = j+50){
  //   plinkos.push(new Plinko(j ,325))
  // }
  // for(var j = 40; j<= width-10; j = j+50){
  //   plinkos.push(new Plinko(j ,375))
  // }
  // for(var j = 15; j<= width-10; j = j+50){
  //   plinkos.push(new Plinko(j ,425))
  // }

  //plinko1 = new Plinko();
}

function draw() {
  background(0); 

    if(gameState != "end"){
    textSize(20);
    fill("white");
    text("Score: " + score, 675,40);

    if (particle != null) {
      particle.display();
      if(particle.body.position.y > 760 && particle.body.position.x > 0 && particle.body.position.x < 800){
        if(particle.body.position.x <= 240){
          score += 500;
          particle = null;
        }
        else if(particle.body.position.x < 600){
          score += 100;
          particle = null;
        }
        else{
          score += 200;
          particle = null;
        }
        count ++;
      }
    }

    if(count >= 5) {
      gameState = "end";
    }
  }
  else{
    textSize(60);
    fill("red")
    text("GAME OVER",200,250);
    textSize(30);
    fill("white");
    text("Your Score: " + score, 250,350);
  }

  Engine.update(engine);

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  // for(var i = 0; i < particles.length; i++){
  //   particles[i].display();
  // }

  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }

  ground.display();

  fill("white");
  textSize(30);
  text("500",15,525);
  text("500",95,525);
  text("500",175,525);

  text("100",255,525);
  text("100",335,525);
  text("100",415,525);
  text("100",495,525);
  
  text("200",575,525);
  text("200",655,525);
  text("200",735,525);
}

function keyPressed(){
    if(keyCode===32){
    particle = new Particle(mouseX,5,10);
    score1 = false;
  }
}