//interaction1

var name = window.prompt ("Wie heißt du?");
alert("Ich begrüße dich auf unsere Website " + name + ", viel spaß beim stöbern!")

//interaction2

var btn = document.getElementById('myBtn');

function myfunc() {
	document.getElementById("demo").innerHTML = "You won a Brand new watch! Code 777";
}

btn.addEventListener('click', myfunc);

