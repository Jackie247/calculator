// Variables to store inputs
let prevInput = "";
let currInput = "";
let operation = null;
let result = null;
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
    button.addEventListener('click', () => {updateOperation(button.textContent)});
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
        // If no user input yet, overwrite number.
        inputDisplay.textContent = button.textContent
    }
    if(result !== null){
        inputDisplay.textContent = "";
        inputDisplay.textContent += button.textContent;
    }
}
function calculate(){
    prevInput = historyDisplay.textContent;
    currInput = inputDisplay.textContent;
    historyDisplay.textContent = `${prevInput} ${currInput} =`;
    inputDisplay.textContent = operate(operation,prevInput,currInput);
    result = operate(operation,prevInput,currInput);
    operation = null;
    return true;
}

function updateOperation(operator){
    // If an operation already exists, we want to caculate the result of the current inputs
    // If we dont calculate a result, the inputs get overwritten.
    if(operation !== null){
        // Operator has been set
        calculate()
        return true;
    }
    operation = operator;
    updateHistory();
}

function updateHistory(){
    historyDisplay.textContent = `${inputDisplay.textContent} ${operation}`;
    inputDisplay.textContent = "0";
}
function operate(operator,a,b){
    a = parseInt(a,10);
    b = parseInt(b,10);
    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "÷":
            if(b === 0) return alert("Division by 0!");
            else return divide(a,b);
        default:
            return false;
    };
}

function clear(){
    inputDisplay.textContent = "0";
    historyDisplay.textContent = "";
}