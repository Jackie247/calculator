// Variables to store inputs
let prevInput = "";
let currInput = "";
let operation = null;

// Select operator buttons
const buttons = document.querySelectorAll('.gridBtn');
const opButtons = document.querySelectorAll('.operatorBtn');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector(".equals");
// Select display container
const historyDisplay = document.querySelector(".history");
const inputDisplay = document.querySelector(".display");

buttons.forEach((button)=>{ 
    button.addEventListener('click',()=>{inputNum(button);})
});
opButtons.forEach((button) => {
    button.addEventListener('click', () => {updateCurrOperation(button.textContent)});
});
clearBtn.addEventListener('click',() => {clear()});
equalsBtn.addEventListener('click',()=>{calculate()});
// Arithmetic helper functions
function add(a,b){return a+b;}
function subtract(a,b){return a -b;}
function multiply(a,b){return a * b;}
function divide(a,b){return a / b;}
// General functions
function inputNum(button){
    if(inputDisplay.textContent == '0'){
        inputDisplay.textContent = button.textContent
    }
    else{
        inputDisplay.textContent += button.textContent;
        console.log("Current input: " + inputDisplay.textContent);
    }
}
function calculate(){
    prevInput = historyDisplay.textContent;
    currInput = inputDisplay.textContent;
    let result = operate(operation,prevInput,currInput);
    inputDisplay.textContent = result;
    operation = null;
}

function updateCurrOperation(operator){
    prevInput = inputDisplay.textContent;
    historyDisplay.textContent = prevInput;
    inputDisplay.textContent = "0";
    operation = operator;
    console.log(operation);
}
function operate(operator,a,b){
    a = parseInt(a,10);
    b = parseInt(b,10);
    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "÷":
            return divide(a,b);
        default:
            return false;
    };
}

function clear(){
    inputDisplay.textContent = "0";
    historyDisplay.textContent = "";
}