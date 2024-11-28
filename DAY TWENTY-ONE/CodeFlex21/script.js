let oneBtn = document.getElementById("one-btn");
let twoBtn = document.getElementById("two-btn");
let threeBtn = document.getElementById("three-btn");
let fourBtn = document.getElementById("four-btn");
let fiveBtn = document.getElementById("five-btn");
let sixBtn = document.getElementById("six-btn");
let sevenBtn = document.getElementById("seven-btn");
let eightBtn = document.getElementById("eight-btn");
let nineBtn = document.getElementById("nine-btn");
let zeroBtn = document.getElementById("zero-btn");

let decimalBtn = document.getElementById("decimal-btn");
let clearAllBtn = document.getElementById("clearAll-btn");
let deleteBtn = document.getElementById("delete-btn");
let divideBtn = document.getElementById("divide-btn");
let multiplyBtn = document.getElementById("multiply-btn");
let addBtn = document.getElementById("add-btn");
let substractBtn = document.getElementById("substract-btn");

let equalsBtn = document.getElementById("equals-btn");
let outPut = document.getElementById("output");


function outputDisplay(input){
    outPut.value += input;
}

// DISPLAYING BUTTON VALUES ON OUTPUT FIELLD
oneBtn.addEventListener("click", ()=>{
    input = oneBtn.innerHTML;
    outputDisplay(input);
})


twoBtn.addEventListener("click", ()=>{
    input = twoBtn.innerHTML;
    outputDisplay(input);
})


threeBtn.addEventListener("click",()=>{
    input = threeBtn.innerHTML;
    outputDisplay(input);
})


fourBtn.addEventListener("click", ()=>{
    input = fourBtn.innerHTML;
    outputDisplay(input);
})


fiveBtn.addEventListener("click", ()=>{
    input = fiveBtn.innerHTML;
    outputDisplay(input);
})


sixBtn.addEventListener("click", ()=>{
    input = sixBtn.innerHTML;
    outputDisplay(input);
})


sevenBtn.addEventListener("click", ()=>{
    input = sevenBtn.innerHTML;
    outputDisplay(input);
})


eightBtn.addEventListener("click", ()=>{
    input = eightBtn.innerHTML;
    outputDisplay(input);
})


nineBtn.addEventListener("click",()=>{
    input = nineBtn.innerHTML;
    outputDisplay(input);
})


zeroBtn.addEventListener("click", ()=>{
    input = zeroBtn.innerHTML;
    outputDisplay(input);
})


decimalBtn.addEventListener("click", ()=>{
    input = decimalBtn.innerHTML;
    outputDisplay(input);
})


addBtn.addEventListener("click", ()=>{
    input = addBtn.innerHTML;
    outputDisplay(input);
})


substractBtn.addEventListener("click", ()=>{
    input = substractBtn.innerHTML;
    outputDisplay(input);
})


divideBtn.addEventListener("click", ()=>{
    input = divideBtn.innerHTML;
    outputDisplay(input);
})


multiplyBtn.addEventListener("click", ()=>{
    input = multiplyBtn.innerHTML;
    outputDisplay(input);
})

// CLEAR ALL FROM SCREEN
function clearDisplay(){
    outPut.value =" ";
}

clearAllBtn.addEventListener("click",  clearDisplay);


// DELETE ONE CHARACTER AT A TIME
function deleteSingle(){
    let delOut = outPut.value;
    outPut.value = delOut.slice(0, -1);
}

deleteBtn.addEventListener("click", ()=>{
    deleteSingle();
})


// CALCULATE RESULT
function calculate(){
    try{
        outPut.value = eval(outPut.value);
    }
    catch(error){
        outPut.value = "Error";
    }
}

equalsBtn.addEventListener("click", calculate);