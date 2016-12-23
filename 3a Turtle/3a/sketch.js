// TURTLE GRAPHICS
//
//https://en.wikipedia.org/wiki/Turtle_graphics
// 
// this p5 sketch does a simple implementation of Seymour Papert's
// 'turtle graphics' package for LOGO.  using key commands, you can
// drive a turtle as it draws on the screen.
// 
// your tasks:
// (1) make the drawing system that the turtle drives around
// more interesting.  you can change the way lines work; you
// can have it plop down images instead of shapes; you can 
// have it set vertex points for shapes.
// (2) expand the turtle's vocabulary so it understands more 
// symbols than +, -, and F.  for example, a standard turtle
// typically will use lowercase 'f' for a move that *doesn't*
// draw (e.g. to leave a space).  it will also allow for branching
// symbols such as '[' and ']' so that the turtle can go on an
// expedition and 'teleport' back when a branch closes.  a simple
// thought would be to have the 'C' key change the turtle's drawing
// color.
// (3) find a way to make the turtle draw *automatically*, using
// the same system.  see the next sketch for an example of how that
// might be done.  :)

var x, y; // some variables for the current position of the turtle
var currentangle = 270; // we start out facing north
var step = 20; // how many pixels do we move forward when we draw?
var angle = 45; // how many degrees do we turn with '+' and '-'

var mic = new p5.AudioIn();
mic.start();

// LINDENMAYER STUFF (L-SYSTEMS)
var thestring = 'A'; // "axiom" or start of the string
var numloops = 5; // how many iterations of the L-system to pre-compute
var therules = []; // array for rules
therules[0] = ['A', '-BF+AFA+FB-']; // first rule
therules[1] = ['B', '+AF-BFB-FA+']; // second rule

var whereinstring = 0; // where in the L-system are we drawing right now?

function setup() {
	createCanvas(800, 600);
	background(255);
	noStroke();

	// start our turtle in the middle of the screen
	x = width / 2;
	y = height / 2;

	osc = new p5.Oscillator();
	osc.setType();
	osc.freq(240);
	osc.amp(0);
	osc.start();
}

function draw() {
	var r = random(0, 255);
	var g = random(0, 255);
	var b = random(0, 255);
	var a = random(0, 100);

	// pick a gaussian (D&D) distribution for the radius
	var radius = 0;
	radius += random(0, 15);
	radius += random(0, 15);
	radius += random(0, 15);
	radius = radius / 3;

	// draw the stuff:
	fill(r, g, b, a); // interior fill color
	ellipse(x, y, radius, radius);

	if (mouseIsPressed === true) {
		background(r, g, b);
	}
	
	var level = mic.getLevel();

	if (level > 0.1) {
		function lindenmayer(s) {
			var r = random(0, 255);
			var g = random(0, 255);
			var b = random(0, 255);
			var a = random(0, 100);

			var outputstring = ''; // start a blank output string

			// go through the string, doing rewriting as we go

			// iterate through 'therules' looking for symbol matches:
			for (var i = 0; i < s.length; i++) // every symbol in 's'
			{
				var ismatch = 0; // by default, no match
				for (var j = 0; j < therules.length; j++) // every rule in 'therules'
				{
					if (s.charAt(i) == therules[j][0]) // MATCH!
					{
						outputstring += therules[j][1]; // write substitution
						ismatch = 1; // we have a match, so don't copy over symbol
						break; // get outta this for() loop
					}
				}
				// if nothing matches in 'therules' array, just copy the symbol over.
				if (ismatch === 0) outputstring += s.charAt(i);
			}

			return (outputstring); // send out the modified string
		}

		function drawIt(k) {
  			if(level > 0.1) // draw forward
  			{
    			// polar to cartesian transformation based on step and currentangle:
    			var x1 = x + step*cos(radians(currentangle));
    			var y1 = y + step*sin(radians(currentangle));
    			// update the turtle's position:
   				x = x1;
    			y = y1;
  			}

  			fill(r, g, b, a); // interior fill color
 		 	ellipse(x, y, radius, radius); // circle that chases the mouse
		}	
			
		for (var i = 0; i < numloops; i++) {
			thestring = lindenmayer(thestring); // do the stuff to make the string
		}

		// increment the point for where we're reading the string.
		// wrap around at the end.
		
		whereinstring++;
		if (whereinstring > thestring.length - 1) whereinstring = 0;
	}

	if (x < 0) {
		x = width;
	} else if (x > width) {
		x = 0;
	} else if (y < 0) {
		y = height;
	} else if (y > height) {
		y = 0;
	}
}

function keyTyped() {
	//console.log(key); // what key did we type?

	if (key === 'F') // draw forward
	{
		// polar to cartesian transformation based on step and currentangle:
		var x1 = x + step * cos(radians(currentangle));
		var y1 = y + step * sin(radians(currentangle));
		line(x, y, x1, y1); // connect the old and the new
		// update the turtle's position:
		x = x1;
		y = y1;

		osc.amp(.5, 0.1);
		osc.freq(random(80, 440));
	} else if (key == 'f') {
		x1 = x + step * cos(radians(currentangle));
		y1 = y + step * sin(radians(currentangle));
		line(x, y, x1, y1);
		x = x1;
		y = y1;
	} else if (key == 'C') {
		currentangle += angle; // Counterclockwise 45 degrees
	} else if (key == 'X') {
		currentangle -= angle; // Clockwise 45 degrees
	} else if (key == 'W') {
		currentangle = 270; // Up
	} else if (key == 'S') {
		currentangle = 90; // Down
	} else if (key == 'A') {
		currentangle = 180; // Left
	} else if (key == 'D') {
		currentangle = 360; // Right
	} else if (key == 'G') {

	}
}