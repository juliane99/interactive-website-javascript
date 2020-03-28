// Interaction 5: Canvas 

var canvas = document.querySelector('canvas');


// fit entire width and heigt of browser window 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// new variable 

var context = canvas.getContext('2d'); // draw 2d elements with vriable c


// creating a recktangle
//context.fillStyle = 'rgba(255, 50, 50, 1) ';	
//context.fillRect(50, 50, 50, 50);

console.log('canvas');

// creating a circle
//context.beginPath();
//context.arc(200, 200, 30, 0, Math.PI * 2, false);
//context.strokeStyle = 'red';
//context.stroke();



// anmitaing a circle

var x = 200;
var movex = 4;
var circleRadius = 50;
function animateCircle() {
    requestAnimationFrame(animateCircle); //metha function 

    context.clearRect(0, 0, innerWidth, innerHeight);

    context.beginPath();
    context.arc(200, 200, 30, 0, Math.PI * 2, false);
    context.strokeStyle = 'blue';
    context.stroke();

    if (x + circleRadius > innerWidth) {
        movex = -movex;
    }
    x += movex;
    
}
animateCircle();