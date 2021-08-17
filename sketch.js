const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball,ball2,ball3,ball4,ball5,ball6

var con,con2,con3,con4,con5,con6



//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

  var density_options={
    density:0.8
  }

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
//ball
	ball= Bodies.rectangle(490,100,50,30,density_options)
  World.add(world,ball)

  var cons_option={
    pointA:{x:490, y:100},
    bodyB:ball,
    length:300,
   // stiffness:0.3
   density:0.8

    
  }

  con=Matter.Constraint.create(cons_option);
 World.add(world,con) ;
 //ball2
 ball2= Bodies.rectangle(460,100,50,30,density_options)
  World.add(world,ball2)

  var cons2_option={
    pointA:{x:460, y:100},
    bodyB:ball2,
    length:300,
    //stiffness:0.3
    density:0.8
    
  }
  con2=Matter.Constraint.create(cons2_option);
 World.add(world,con2) ;
 //ball3
var options={
restitution:1,
friction:0,
density:0.8
}

 ball3= Bodies.rectangle(430,100,50,30,density_options)
  World.add(world,ball3)


  var cons3_option={
    pointA:{x:430, y:100},
    bodyB:ball3,
    length:300,
    
    //stiffness:0.3

    
  }


  con3=Matter.Constraint.create(cons3_option);
  World.add(world,con3) ;
 
  //ball4
  ball4= Bodies.rectangle(400,100,50,30,density_options)
  World.add(world,ball4)

  var cons4_option={
    pointA:{x:400, y:100},
    bodyB:ball4,
    length:300,
   // stiffness:0.3
   density:0.8,
    
  }
  con4=Matter.Constraint.create(cons4_option);
  World.add(world,con4);
  //ball5
  ball5= Bodies.rectangle(350,100,50,30,density_options)
  World.add(world,ball5)

  var cons5_option={
    pointA:{x:350, y:100},
    bodyB:ball5,
    length:300,
   // stiffness:0.3
   density:0.8,
    
  }
  con5=Matter.Constraint.create(cons5_option);
  World.add(world,con5);
//ball6
ball6= Bodies.rectangle(320,100,50,30,density_options)
  World.add(world,ball6)

  var cons6_option={
    pointA:{x:320, y:100},
    bodyB:ball6,
    length:300,
   // stiffness:0.3
   density:0.8,
    
  }
  con6=Matter.Constraint.create(cons6_option);
  World.add(world,con6);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
  line(con6.pointA.x,con6.pointA.y,ball6.position.x,ball6.position.y);


  pop();
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,30);
  ellipse(ball2.position.x,ball2.position.y,30);
  ellipse(ball3.position.x,ball3.position.y,30);
  ellipse(ball4.position.x,ball4.position.y,30);
  ellipse(ball5.position.x,ball5.position.y,30);
  ellipse(ball6.position.x,ball6.position.y,30);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:0});
    }
}