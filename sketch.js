function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	frameRate(30);
	noFill();
}

function draw() {
	// if(frameCount === 1){
		const maxSize = normalizeMouse(mouseX, windowWidth);
		var balls = createBalls(300);
	
		for(var ball of balls){
			// console.log(balls[i].x,balls[i].y);
			circle(ball.x,ball.y,maxSize);
		}
		stroke(0,10);
	// }
	
}

function normalizeMouse(mVal, limit){
	return map(mVal,0,limit,0,200);
}

function createBalls(n){
	ballArray = [];
	var increment = floor(windowWidth*windowHeight/n);
	for(var i = 0; i < n; i++){
		ballArray.push({
			x:floor((i*increment)%windowWidth),
			y:floor(i/windowHeight*increment)
		});
	}

	return ballArray;
}