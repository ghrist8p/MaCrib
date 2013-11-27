function main() { 
    var canvas = document.getElementById("myDrawing");
    var ctx = canvas.getContext("2d");

    var frame = 0;
    setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawTopLeftAndDownRightCursor(ctx, canvas);
        drawGrass(ctx, canvas);
        drawWalls(ctx, canvas);
        drawRoof(ctx, canvas);
        drawSmoke(ctx, canvas, frame);
        frame = (frame + 1) % 320;
    }, 40);
}

//draws grass
function drawGrass(ctx, canvas) {
    var x = 0;
    var y = 0;

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
    ctx.stroke();

    //over draw
    ctx.beginPath();
    //east fron wall
    ctx.rect(x+125,y+30,60,75);//h
    //parallelogram
    ctx.moveTo(x+185,y+30);//i
    ctx.lineTo(x+235,y+0);//j
    ctx.lineTo(x+235,y+75);//k
    ctx.lineTo(x+185,y+105);//l
    ctx.fill();
    ctx.stroke();
}

function drawDoor(ctx, canvas) {
    var x = 30;
    var y = 90;
    ctx.beginPath();
}

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
    //draw west troof triangle
    ctx.moveTo(x+155,y-10);//p
    ctx.lineTo(x+125,y+30);//h
    ctx.lineTo(x+185,y+30);//i
    ctx.lineTo(x+155,y-10);//p
    //draw west roof parallelogram
    ctx.lineTo(x+205,y-40);//o
    ctx.lineTo(x+235,y+0);//j
    ctx.lineTo(x+185,y+30);//j
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();

}

//eventually this will be thw smoke
//the frame loops from 0 to wahtever
//the frame is used to animate the smoke
function drawSmoke(ctx, canvas, frame) {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.font = "bold 1em Arial";
    ctx.fillText("Hello World", 46, frame);
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