function main() { 
    var canvas = document.getElementById("myDrawing");
    var ctx = canvas.getContext("2d");

    var frame = 0;
    setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);	//clear drawing region
        //drawTopLeftAndDownRightCursor(ctx, canvas);
        drawGrass(ctx, canvas);	//draw grass
        drawWalls(ctx, canvas); //draw walls
		drawWindows(ctx, canvas); //draw windows
		drawDoor(ctx, canvas); //draw door
        drawRoof(ctx, canvas);	//draw roof
		drawChimney(ctx, canvas);	//draw chimney
        drawSmoke(ctx, canvas, frame);	//draw smoke animation
        frame = (frame + 1) % 320;	//update animation frame
    }, 40);
}

//draws grass
function drawGrass(ctx, canvas) {
    var x = 0;
    var y = 0;

	//use a quadratic curve for a funky shape
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(x+25,y+178);
    ctx.quadraticCurveTo(x+4,y+225,x+54,y+258);
    ctx.quadraticCurveTo(x+102,y+290,x+145,y+240);
    ctx.quadraticCurveTo(x+180,y+200,x+230,y+205);
    ctx.quadraticCurveTo(x+283,y+210,x+273,y+162);
    ctx.quadraticCurveTo(x+265,y+120,x+155,y+110);
    ctx.quadraticCurveTo(x+58,y+102,x+25,y+178);
    ctx.fill();
    ctx.stroke();
    
}

//draw walls and fill them in
function drawWalls(ctx, canvas) {
    var x = 30;
    var y = 90;

    ctx.fillStyle = 'blue';
    ctx.beginPath()
    //west face wall
    ctx.rect(x+0,y+30,60,75);//a
    //parallelogram
    ctx.moveTo(x+60,y+30);//b
    ctx.lineTo(x+85,y+15);//c
    ctx.lineTo(x+85,y+90);//d
    ctx.lineTo(x+60,y+105);//e
    //back middle wall
    ctx.moveTo(x+85,y+15);//c
    ctx.lineTo(x+150,y+15);//f
    ctx.lineTo(x+150,y+90);//g
    ctx.lineTo(x+85,y+90);//d
    ctx.fill();
    ctx.stroke();

    //over draw
    ctx.beginPath();
    //east front wall
    ctx.rect(x+125,y+30,60,75);//h
    //parallelogram
    ctx.moveTo(x+185,y+30);//i
    ctx.lineTo(x+235,y+0);//j
    ctx.lineTo(x+235,y+75);//k
    ctx.lineTo(x+185,y+105);//l
    ctx.fill();
    ctx.stroke();
}

//draw windows and fill them in
function drawWindows(ctx, canvas) {
	
	//make the windows glass-colored
    ctx.fillStyle = 'cyan';
	
	//draw west window
    ctx.beginPath();
    ctx.moveTo(46,133);//top,left
    ctx.lineTo(46,169);//bottom,left
    ctx.lineTo(75,169);//bottom,right
    ctx.lineTo(75,133);//top,right
    ctx.lineTo(46,133);//top,left
    ctx.fill();
    ctx.stroke();
	
	//draw east window
    ctx.beginPath();
    ctx.moveTo(172,133);//top,left
    ctx.lineTo(172,169);//bottom,left
    ctx.lineTo(204,169);//bottom,right
    ctx.lineTo(204,133);//top,right
    ctx.lineTo(172,133);//top,left
    ctx.fill();
    ctx.stroke();
}

//draw door and fill it in
function drawDoor(ctx, canvas) {
	//make the door brown
    ctx.fillStyle = 'brown';
	
    ctx.beginPath();
    ctx.moveTo(127,139);//top,left
    ctx.lineTo(127,179);//bottom,left
    ctx.lineTo(149,179);//bottom,right
    ctx.lineTo(149,139);//top,right
    ctx.lineTo(127,139);//top,left
    ctx.fill();
    ctx.stroke();
}

//draw a red roof
function drawRoof(ctx, canvas) {
    var x = 30;
    var y = 90;
    
    ctx.fillStyle = 'red';
    ctx.beginPath();
    //draw west roof triangle
    ctx.moveTo(x+0,y+30)//a
    ctx.lineTo(x+30,y-10);//m
    ctx.lineTo(x+60,y+30);//b
    //draw west trapez
    ctx.moveTo(x+30,y-10);//m
    ctx.lineTo(x+90,y-40);//n
    ctx.lineTo(x+85,y+15);//c
    ctx.lineTo(x+60,y+30);//b
    //draw middle roof trapez
    ctx.moveTo(x+90,y-40);//n
    ctx.lineTo(x+205,y-40);//o
    ctx.lineTo(x+150,y+15);//f
    ctx.lineTo(x+85,y+15);//c
    ctx.fill();
    ctx.stroke();

    //over draw
    ctx.beginPath();
    //draw east troof triangle
    ctx.moveTo(x+155,y-10);//p
    ctx.lineTo(x+125,y+30);//h
    ctx.lineTo(x+185,y+30);//i
    ctx.lineTo(x+155,y-10);//p
    //draw east roof parallelogram
    ctx.lineTo(x+205,y-40);//o
    ctx.lineTo(x+235,y+0);//j
    ctx.lineTo(x+185,y+30);//j
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();

	
}

//draw chimney
function drawChimney(ctx, canvas) {
	
    ctx.fillStyle = 'blue';
	
	//front wall of chimney
    ctx.beginPath();
    ctx.moveTo(236,79);	//top,left
    ctx.lineTo(236,180);	//bottom,left
    ctx.lineTo(255,180);	//bottom,right
    ctx.lineTo(255,79);	//top,right
    ctx.lineTo(236,79);	//top,left
    ctx.fill();
    ctx.stroke();
	
	//east wall of chimney
    ctx.beginPath();
    ctx.moveTo(255,79);	//top,left
    ctx.lineTo(255,180);	//bottom,left
    ctx.lineTo(265,160);	//bottom,right
    ctx.lineTo(265,65);	//top,right
    ctx.lineTo(255,79);	//top,left
    ctx.fill();
    ctx.stroke();
	
	//draw top of chimney
    ctx.beginPath();
    ctx.moveTo(246,65);	//top,left
    ctx.lineTo(236,79);	//bottom,left
    ctx.lineTo(255,79);	//bottom,right
    ctx.lineTo(265,65);	//top,right
    ctx.lineTo(246,65);	//top,left
    ctx.fill();
    ctx.stroke();

	//draw chimney opening
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(249,70);	//top,left
    ctx.lineTo(241,74);	//bottom,left
    ctx.lineTo(252,74);	//bottom,right
    ctx.lineTo(260,70);	//top,right
    ctx.lineTo(251,70);	//top,left
    ctx.fill();
    ctx.stroke();
	
}

//draw a smoke 'ball'
function drawSmokeParticle(ctx, canvas, frame) {
	var baseradius = 10;
	var radiusgrowth = 15;
	
	ctx.arc(252, 71 - frame/320.0*(71+baseradius+radiusgrowth), baseradius+frame/320.0*radiusgrowth, 0, 2*Math.PI);
}

//the frame loops from 0 to 320
//the frame is used to animate the smoke
function drawSmoke(ctx, canvas, frame) {
    //ctx.fillStyle = "rgb(0, 0, 0)";
    //ctx.font = "bold 1em Arial";
    //ctx.fillText("Hello World", 46, frame);
	
	//draw several smoke particles
    ctx.fillStyle = 'gray';
	
	ctx.beginPath();
	drawSmokeParticle(ctx, canvas, (frame+320/5*0)%320);
	drawSmokeParticle(ctx, canvas, (frame+320/5*1)%320);
	drawSmokeParticle(ctx, canvas, (frame+320/5*2)%320);
	drawSmokeParticle(ctx, canvas, (frame+320/5*3)%320);
	drawSmokeParticle(ctx, canvas, (frame+320/5*4)%320);
	drawSmokeParticle(ctx, canvas, (frame+320/5*5)%320);
	drawSmokeParticle(ctx, canvas, (frame+320/5*6)%320);
    ctx.fill();
    //ctx.stroke();
}

function drawTopLeftAndDownRightCursor(ctx, canvas) {
    ctx.strokeWidth = 1;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(5,5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(5,0);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(295,295);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(300,295);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(295,300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,5);
    ctx.stroke();
}