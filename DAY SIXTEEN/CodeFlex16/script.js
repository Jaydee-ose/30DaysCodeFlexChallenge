let firstInput = document.getElementById("first");
let secondInput = document.getElementById("second");
let sumResult = document.getElementById("sum-result");
let equalBtn = document.getElementById("equals-to")



sumResult.style.display="none";
function add() {
    event.preventDefault();
        
    let num1 =parseFloat(firstInput.value);
    let num2 =parseFloat(secondInput.value);

    if (! isNaN(num1) &&  ! isNaN(num2)){
        let summ = num1 + num2;
        sumResult.innerHTML= `${summ}`;
    }

    else{
        sumResult.innerHTML= "invalid Input!!!";
    }

    sumResult.style.display="flex";
};

equalBtn.addEventListener("click", add);

 

