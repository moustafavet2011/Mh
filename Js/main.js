// set the variable 
// the main container will be
let mainContainer = document.querySelector(".header .container");

//the logo
let logo = document.querySelector(".header .logo");

//the links
let links = document.querySelector(".header .links");

//the icons of span to hide the uls
let icons = document.querySelector(".header .links .icons");

// the ul of headerLinks
let ulLinks = document.querySelector(".header .links ul")

//the link's urls for the header

let headerLinks = document.querySelectorAll(".header .links ul li a");

//the categories section
let sections = document.querySelector(".categories .section ");
//show the list of links when click on the icons
icons.onclick = function(){
    ulLinks.classList.toggle("show");
}
logo.addEventListener("click", function(){
    logo.classList.toggle("zoom-in");
    //icons.classList.toggle("hide");
});


