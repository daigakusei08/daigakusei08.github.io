let angle = 0.0; //浮動小数点数angleを0.0とおく
let offset = 60; //scalaroffsetを00とおく
let scalar = 200; //浮動小数点数scalarを40とおく
let speed_ = 0.06 //浮動小数点数速度を0.05とおく
let img;
let i = 0;

function preload() {
	img = loadImage('kingyo.png');
	
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
	background(255);
}

function draw() {
	translate(width/3, height/1.5);
	rotate(PI/2);
	background(255);
	push();
	if (mouseIsPressed == true) { 
		pop();	
		rotate(-angle);
		translate(offset-cos(angle) * scalar, offset-sin(angle) * scalar);
		angle += speed_; //angleにspeedを加算
	}
	else { 
		pop();
		rotate(-angle);
		translate(offset-cos(angle) * scalar, offset-sin(angle) * scalar);
	}
	image(img, 0, 0, width/4, height/4);
	
}
