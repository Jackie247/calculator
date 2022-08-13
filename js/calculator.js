// Variables to store inputs
let prevInput = "";
let currInput = "";
let operation = null;
// Select operator buttons
const buttons = document.querySelectorAll('.gridBtn');
const opButtons = document.querySelectorAll('.operatorBtn');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector(".equals");
const delBtn = document.querySelector(".delete");
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
delBtn.addEventListener("click", () => {delNum()})
// Arithmetic helper functions
function add(a,b){return a+b;}
function subtract(a,b){return a -b;}
function multiply(a,b){return a * b;}
function divide(a,b){return a / b;}
// General functions
function inputNum(button){
    // When a number is pressed, replace zero
    if(inputDisplay.textContent == "0" || historyDisplay.textContent == `${prevInput} ${operation}`){
        inputDisplay.textContent = "";
    }
    // Append number to display.
    inputDisplay.textContent += button.textContent;
}
function updateOperation(operator){
    // If an operation already exists, we want to caculate the result of the current inputs
    // If we dont calculate a result, the inputs get overwritten.
    if(operation !== null){calculate()}
    // Get previous input as "a" value;
    prevInput = inputDisplay.textContent;
    operation = operator;
    historyDisplay.textContent = `${prevInput} ${operation}`
}
function calculate(){
    if(operation == null || historyDisplay.textContent == `${prevInput}`) return;
    // Get current input as "b" value
    currInput = inputDisplay.textContent;
    inputDisplay.textContent = formatNumber(operate(operation,prevInput,currInput));
    historyDisplay.textContent = `${prevInput} ${operation} ${currInput} =`;
    // Display result after calculating
    operation = null;
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

function formatNumber(num){
    if(!Number.isInteger(num) 
        && !Number.isNaN(num))
        {
            // Float
            return num.toFixed(2);
        }
    return num;
}
function clear(){
    inputDisplay.textContent = "0";
    historyDisplay.textContent = "";
    prevInput = "";
    currInput = "";
    operation = null;
}

function delNum(){
    if(inputDisplay.textContent.length == 1){
        inputDisplay.textContent = "0";
        return;
    }
    inputDisplay.textContent = inputDisplay.textContent.slice(0,-1);
}