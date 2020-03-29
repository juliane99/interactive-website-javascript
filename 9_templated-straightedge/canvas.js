// Interaction 5: Canvas 

var canvas = document.querySelector('canvas');

// fit entire width and heigt
canvas.width = 1255;
canvas.height = 300;

// new variable 

var context = canvas.getContext('2d'); // draw 2d elements with vriable c

console.log('canvas');

// anmitaing a circle

var x = 50;
var movex = 4;
var y = 50;
var movey = 4;
var circleRadius = 30;

function animateCircle() {
    requestAnimationFrame(animateCircle); //metha function 

    context.clearRect(0, 0, 1255, 300);

    context.beginPath();
    context.arc(x, y, circleRadius, 0, Math.PI * 2, false);
    context.strokeStyle = 'red';
    context.stroke();

    if (x + circleRadius > 1255 || x - circleRadius < 0) { // condition x 
        movex = -movex;
    }
    if (y + circleRadius > 300 || y - circleRadius < 0) {
        movey = -movey;
    } 
    x += movex;
    y += movey;
    
}
animateCircle();