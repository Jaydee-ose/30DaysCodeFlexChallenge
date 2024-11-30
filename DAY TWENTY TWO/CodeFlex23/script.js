 let bodyAll = document.body;
 let navA = document.getElementById("navA");
 let fooTer = document.getElementById("fooTer");
 let mainContent= document.getElementById("main-content");
 let moon =document.getElementById("moon");
 let all =document.getElementById("all");
 let register = document.getElementById("register");
  

moon.addEventListener("click", function(){
    let theme = moon.innerHTML;
    if(theme ==="🌙"){
        all.style.backgroundColor="black";
        fooTer.style.backgroundColor="grey";
        bodyAll.style.backgroundColor="lightgrey";
        moon.innerHTML ="☀";
        register.style.backgroundColor="rgb(184, 184, 184)";
    }

    else{
        all.style.backgroundColor="blue";
        fooTer.style.backgroundColor="#fff7f7";
        bodyAll.style.backgroundColor="white";
        moon.innerHTML ="🌙";

        register.style.backgroundColor= "white";
    }
})
