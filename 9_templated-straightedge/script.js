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
var picture = 1;  
slides(picture);  
function following(n) {  
	slides(picture += n);  
}  
function currentSlide(n) {  
	slides(picture = n);  
}  
function slides(n) {  
	var i;  
	var slides = document.getElementsByClassName("view");  
	if (n > slides.length) { picture = 1 }  
	if (n < 1) { picture = slides.length }  
	for (i = 0; i < slides.length; i++) {  
		slides[i].style.display = "none";  
	}  
	slides[picture - 1].style.display = "block";  
}  
  
  // interaction4
  function filloutform() {
	var a = document.forms["form"] ["username"].value;
	if (a == "") {
	 alert("Name must be filled out");
	 return false;
}
}




