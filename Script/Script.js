function main() { 
    var canvas = document.getElementById("myDrawing");
    var ctx = canvas.getContext("2d");

    var frame = 0;
    setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrass(ctx, canvas);
        drawWalls(ctx, canvas);
        drawRoof(ctx, canvas);
        drawSmoke(ctx, canvas, frame);
        frame = (frame + 1) % 320;
    }, 40);
}

//draws grass
function drawGrass(ctx, canvas) {
    ctx.beginPath();
    ctx.moveTo(25,178);
    ctx.quadraticCurveTo(4,225,54,258);
    ctx.quadraticCurveTo(102,290,145,240);
    ctx.quadraticCurveTo(180,200,230,205);
    ctx.quadraticCurveTo(283,210,273,162);
    ctx.quadraticCurveTo(265,120,155,110);
    ctx.quadraticCurveTo(58,102,25,178);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke();
    
}

function drawWalls(ctx, canvas) {
    var x = 30;
    var y = 90;
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
    ctx.fillStyle = 'blue';
    ctx.fill();
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
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();
}

function drawRoof(ctx, canvas) {
    var x = 30;
    var y = 90;

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
    ctx.fillStyle = 'red';
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
    ctx.fillStyle = 'red';
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