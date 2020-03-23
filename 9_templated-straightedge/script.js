//interaction1 

var btn = document.getElementById('myBtn');
function myfunc() {
	document.getElementById("push").innerHTML = "You won a Brand new Compass! Code 777";
}
btn.addEventListener('click', myfunc);



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

// interaction3
function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	var imgText = document.getElementById("imgtext");
	expandImg.src = imgs.src;
	imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
  }
  
  // interaction4
  function filloutform() {
	var a = document.forms["form"] ["username"].value;
	if (a == "") {
	 alert("Name must be filled out");
	 return false;
}
}




