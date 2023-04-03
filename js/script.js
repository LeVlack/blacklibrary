function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-links") {
    x.className += "responsive";
  } else {
    x.className = "nav-links";
  }
} 