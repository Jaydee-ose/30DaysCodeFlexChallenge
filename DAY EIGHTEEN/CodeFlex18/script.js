let logoFont = document.getElementById("logo");
let navUl = document.getElementById("nav-ul");
let mainTheme = document.getElementById("main-theme");
let moreFont = document.getElementById("more");
let themeButton= document.getElementById("theme-btn");
let footerFont = document.getElementById("footer-cr");
let themeColors =["purple", "red", "green", "blue","orangered", "black", "orange"];
mainTheme.style.backgroundColor ="purple";

themeButton.addEventListener("mouseenter", function(){
    themeButton.style.color = "lightgrey" ;
    themeButton.style.backgroundColor = "black";
})

themeButton.addEventListener("mouseleave", function(){
    themeButton.style.backgroundColor = "lightgrey";
    themeButton.style.color = "black";
})

function myTheme() {
    let colorIndex = parseInt(Math.random()*themeColors.length);
    logoFont.style.color =themeColors[colorIndex];
    mainTheme.style.backgroundColor =themeColors[colorIndex];
    moreFont.style.color =themeColors[colorIndex];
    footerFont.style.color =themeColors[colorIndex];
    navUl.style.backgroundColor =themeColors[colorIndex];  
}

themeButton.addEventListener("click", myTheme);
