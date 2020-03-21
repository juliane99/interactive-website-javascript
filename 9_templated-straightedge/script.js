//interaction1

function myfunction1() {
	var text;
	var name = prompt("Wie heißt du?", "Vorname");
	switch(name) {
	 case "Jule":
	   text = "Hallo Jule! !";
	   break;
	 case "Josef":
	   text = "Hallo Josef, viel spaß auf dieser Seite!";
	   break;
	 default:
	   text = "Du hast kein Name eingegeben, probiers nocmal!";
	   break;
	 }
	 document.getElementById("thisone").innerHTML = text;
   }
//interaction2

var btn = document.getElementById('myBtn');

function myfunc() {
	document.getElementById("demo").innerHTML = "You won a Brand new watch! Code 777";
}

btn.addEventListener('click', myfunc);

