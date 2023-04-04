document.getElementById("mybutton").onclick = function() {myFunction()};

function myFunction() {
  //document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
	const name = document.getElementById("name").value;
	alert('Bienvenido, '+ name +'! Te has registrado en Black Library');
	window.location="index.html";
}