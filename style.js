function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "topnav") {
	  document.getElementById("nav").style.width = "100%";
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}