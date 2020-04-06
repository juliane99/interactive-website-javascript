//interaction1: "click" Button

window.addEventListener("load", getElements);
var btn;
function getElements() {
	btn = document.getElementById('Button1');
	btn.addEventListener('click', myfunc);
}
function myfunc() {
	document.getElementById("push").innerHTML = "You won a Brand new Compass! Code 777";
}


//interaction2: Prompt Button

function userInput() {
	var text;
	var name = prompt("Whats your name?", "First Name");
	switch(name) {
	 case "Jule":
	   text = "Hi Jule! Your Compass will show your name on it!";
	   break;
	 case "Josef":
	   text = "Hi Josef!,Your Compass will show your name on it!";
	   break;
	 default:
	   text = "You have to write a name in here, then we will customize your compass!";
	   break;
	 }
	 document.getElementById("input").innerHTML = text;
   }


//interaction 3: Text Animation
var headline = "JOIN OUR TEAM!";
var interactiveText = headline.split("");
var getit = document.getElementById('interactiveText');
if (getit) {

(function animate() {
interactiveText.length > 0 ? getit.innerHTML += interactiveText.shift() : clearTimeout(running); 
var running = setTimeout(animate, 80);
})();

}

// interaction4 Picture Slider
var start = 0;
var pictures = []
var onscreen = 1500;

pictures[0] ="images/paper-3213924_1920.jpg"; 
pictures[1] ="images/adventure-1850673_640.jpg";
pictures[2] ="images/compass-3408928_640.jpg";
pictures[3] ="images/map-3409359_1920.jpg";
pictures[4] ="images/nature-2592000_1920.jpg";
pictures[5] ="images/workplace-1245776_640.jpg";

function slide(){
	document.slideShow.src = pictures[start];

	if(start <pictures.length - 1) {
		start++;
	} else {
		start = 0;
	}
	
	setTimeout("slide()", onscreen);
}

window.onload=slide; 