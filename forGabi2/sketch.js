
// Position Variables
var x = 0;
var y = 0;
 
// Speed - Velocity
var vx = 0;
var vy = 0;
 
// Acceleration
var ax = 0;
var ay = 0;

// Time

var minutes;
var sec;
var hours;

// Gravity
var vMultiplier = 0.007;
var bMultiplier = 0.6;


function setup() {
  // create a canvas to draw on
    createCanvas(windowWidth, windowHeight);
  //set fill to black
    fill(0);
}

function draw() {
  // refresh bkground to white
    background(255);
    
    // call ball move function to move
      ballMove();
    
    //call update time function
      updateTime();
    
    // for loop to create balls based on min
    for (i = 0; i < sec; i++){
      ellipse(x+(random(100)), y+(random(100)), 10, 10);
    }
    
}

//function to apply movement to ball
function ballMove() {
  
	// set aceleration == to aceleration for x and y
	ax = accelerationX;
	ay = accelerationY;

  // apply aceleration to speed for x and y 
	vx = vx + ay;
	vy = vy + ax;
	
	// apply gravity and speed to x and y positions
	y = y + vy * vMultiplier; 
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the canvas
	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * bMultiplier; 
 	}
 	if (x > width - 20) { 
 		x = width - 20; 
 		vx = -vx * bMultiplier; 
 	}
 	if (y > height - 20) { 
 		y = height - 20; 
 		vy = -vy * bMultiplier; 
 	}
	
}

function updateTime(){
  sec = second();
  minutes = minute();
  hours = hour();
}

