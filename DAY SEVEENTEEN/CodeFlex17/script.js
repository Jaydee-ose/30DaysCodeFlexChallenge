let message = document.getElementById("sub-message");
let subButton = document.getElementById("sub-btn");


function decide() {
    if (message.innerHTML === "Subscribe to my channel 🔔" && subButton.innerHTML === "Subscribe"){
        message.innerHTML = "Thanks for Subscribing!!!❤❤";
        subButton.innerHTML= "Unsubscribe";
    }
    else{
        message.innerHTML = "Subscribe to my channel 🔔"
        subButton.innerHTML= "Subscribe";
    }
}

subButton.addEventListener("click", decide);
