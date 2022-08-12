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
    firstInput = historyDisplay.textContent;
    secondInput = inputDisplay.textContent;
    let result = operate(operation,firstInput,secondInput);
    inputDisplay.textContent = result;
    operation = null;
}

function updateCurrOperation(operator){
    operation = operator;
    console.log(operation);
}
function operate(operator,a,b){
    a = parseInt(a,10);
    b = parseInt(b,10);
    switch(operator){
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        default:
            return false;
    };
}

function clear(){

}