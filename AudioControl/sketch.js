//button callback example
var hover = false;

function preload() {
  erasure = loadSound('data/Erasure.mp3');
  
  orlando = loadSound('data/Orlando.mp3');
  
  rapeCulture = loadSound('data/RapeCulture.mp3');
  
  rememberHowItHurt = loadSound('data/RememberHowItHurt.mp3');
  
  transphobia = loadSound('data/Transphobia.mp3');
  
  //transFlag = loadImage('data/TransFlag.jpg');
  
  mask = loadImage('data/Mask.jpg');
}

function setup() {
	createCanvas(800,900);
	
	background(255);
	image(mask, 0, 0, 800, 900);
}

function draw(){
	fill(mouseX/2,mouseY/2,255-mouseY/2)
	noStroke();
	noFill();
	
	rect(600,075,100,100); //Erasure
	rect(680,575,100,150); //Orlando
	rect(070,080,100,100); //RapeCulture
	rect(370,360,100,100); //Remember
	rect(0.0,430,100,100); //Transphobia
	rect(470,210,200,200); //All
	
	//console.log(mouseX);
	//console.log(mouseY)
}

function mousePressed(){
	erasure.setVolume(0.0);
  erasure.playMode('restart');
  erasure.play();
  
  orlando.setVolume(0.0);
  orlando.playMode('restart');
  orlando.play();
  
  rapeCulture.setVolume(0.0);
  rapeCulture.playMode('restart');
  rapeCulture.play();
  
  rememberHowItHurt.setVolume(0.0);
  rememberHowItHurt.playMode('restart');
  rememberHowItHurt.play();
  
  transphobia.setVolume(0.0);
  transphobia.playMode('restart');
  transphobia.play();
	
	rectButton(600,075,100,100, buttonEr); //run our check for the button below
	
	rectButton(680,575,100,150, buttonOr);
	
	rectButton(070,080,100,100, buttonRa);
	
	rectButton(370,360,100,100, buttonRe);
	
	rectButton(0.0,430,100,100, buttonTr);
	
	rectButton(470,210,200,200, buttonAl);
}

function rectButton(x,y,w,h, callback){
	var hit = false;

	hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect

	if(hit){ //if its inside fire the callback
		callback(hit);
	}
}

function buttonEr(callbackData){
	//do things when the button gets pressed.......
	for(i=0;i<50; i++){
		for(j=0;j<50; j++){
			//ellipse(i*100,j*100,50,50);
			erasure.playMode('restart');
			erasure.setVolume(0.5);
			orlando.setVolume(0.0);
			rapeCulture.setVolume(0.0);
			rememberHowItHurt.setVolume(0.0);
			transphobia.setVolume(0.0);
		}
	}
}

function buttonOr(callbackData){
	//do things when the button gets pressed.......
	for(i=0;i<50; i++){
		for(j=0;j<50; j++){
			//ellipse(i*100,j*100,50,50);
			orlando.playMode('restart');
			erasure.setVolume(0.0);
			orlando.setVolume(0.5);
			rapeCulture.setVolume(0.0);
			rememberHowItHurt.setVolume(0.0);
			transphobia.setVolume(0.0);
		}
	}
}

function buttonRa(callbackData){
	//do things when the button gets pressed.......
	for(i=0;i<50; i++){
		for(j=0;j<50; j++){
			//ellipse(i*100,j*100,50,50);
			rapeCulture.playMode('restart');
			erasure.setVolume(0.0);
			orlando.setVolume(0.0);
			rapeCulture.setVolume(0.5);
			rememberHowItHurt.setVolume(0.0);
			transphobia.setVolume(0.0);
		}
	}
}

function buttonRe(callbackData){
	//do things when the button gets pressed.......
	for(i=0;i<50; i++){
		for(j=0;j<50; j++){
			//ellipse(i*100,j*100,50,50);
			rememberHowItHurt.playMode('restart');
			erasure.setVolume(0.0);
			orlando.setVolume(0.0);
			rapeCulture.setVolume(0.0);
			rememberHowItHurt.setVolume(0.5);
			transphobia.setVolume(0.0);
		}
	}
}

function buttonTr(callbackData){
	//do things when the button gets pressed.......
	for(i=0;i<50; i++){
		for(j=0;j<50; j++){
			//ellipse(i*100,j*100,50,50);
			transphobia.playMode('restart');
			erasure.setVolume(0.0);
			orlando.setVolume(0.0);
			rapeCulture.setVolume(0.0);
			rememberHowItHurt.setVolume(0.0);
			transphobia.setVolume(0.5);
		}
	}
}

function buttonAl(callbackData){
	//do things when the button gets pressed.......
	for(i=0;i<50; i++){
		for(j=0;j<50; j++){
			//ellipse(i*100,j*100,50,50);
			erasure.setVolume(0.5);
			orlando.setVolume(0.5);
			rapeCulture.setVolume(0.5);
			rememberHowItHurt.setVolume(0.5);
			transphobia.setVolume(0.5);
		}
	}
}
