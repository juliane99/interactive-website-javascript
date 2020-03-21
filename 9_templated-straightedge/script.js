//interaction1

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
//interaction2

var btn = document.getElementById('myBtn');

function myfunc() {
	document.getElementById("demo").innerHTML = "You won a Brand new Compass! Code 777";
}

btn.addEventListener('click', myfunc);

