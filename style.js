function myFunction() {    
    var x = document.getElementById("nav");
    if (x.className === "navclass" ) {
        x.className += " responsive";
    } else {
        x.className = "navclass";
        //Stops all the animation for the links before hiding hamburger menu.
        
        //Slides up all the parent-links before hiding hamburger menu.
                
    }   
}