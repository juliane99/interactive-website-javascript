//interaction1 (klappt nicht immer)

var btn = document.getElementById('myBtn');
if (btn) { // if not null 
function myfunc() {
	document.getElementById("push").innerHTML = "You won a Brand new Compass! Code 777";
}
btn.addEventListener('click', myfunc);
}


//interaction2 

function myfunction1() {
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
	 document.getElementById("thisone").innerHTML = text;
   }



  
  // interaction4
  function filloutform() {
	var a = document.forms["form"] ["username"].value;
	if (a == "") {
	 alert("Name must be filled out");
	 return false;
}
}

var string = "JOIN OUR TEAM!";
var interactiveText = string.split("");
var getit = document.getElementById('interactiveText');
if (getit) {

(function animate() {
interactiveText.length > 0 ? getit.innerHTML += interactiveText.shift() : clearTimeout(running); 
var running = setTimeout(animate, 80);
})();

}
