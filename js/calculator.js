// Variables to store inputs
let firstInput = "";
let secondInput = "";
let operation = null;

const btnFunctions = ["add","subtract","multiply","divide"];

// Select operator buttons
const buttons = document.querySelectorAll('.gridBtn')
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.sub');
const multBtn = document.querySelector('.mult');
const divBtn = document.querySelector('.divide');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector(".equals");

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        currInput.push(button.textContent);
        updateInputDisplay(currInput);
        console.log("Current input: " + currInput);
    })
})

addBtn.addEventListener('click',() => {
    operate(btnFunctions["add"],firstInput,secondInput);
})


// Arithmetic helper functions
function add(a,b){return a+b;}
function subtract(a,b){return a -b;}
function multiply(a,b){return a * b;}
function divide(a,b){return a / b;}
// General functions
function storeLastInput(prevInput,input){
    if(input.length > 0){
        prevInput.push(input);
        return true;
    }
    return false;
}

function operate(operator,a,b){
    a = parseInt(a,10);
    b = parseInt(b,10)
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
    }
}
function updateInputDisplay(currInput){
    // Select display container
    const inputDisplay = document.querySelector(".display");
    // Update input display if user presses non zero key.
    if(currInput[0] != "0") {
        inputDisplay.textContent = currInput.join("");
        return true;
    }
    // If first input is 0, remove from array.
    calc.currInput.shift();
}
function showResult(result){
        // Select display container
        const inputDisplay = document.querySelector(".display");
        inputDisplay.textContent = result;
}
function updateEquationDisplay(prevInput){
    const eqDisplay = document.querySelector(".equation");
    eqDisplay.textContent = prevInput.join(" + ");
    return true;
}
function clearCurrentInput(currInput){
    const inputDisplay = document.querySelector(".display");
    if(currInput.length > 0){
        currInput.splice(0);
        inputDisplay.textContent = "0";
        return true;
    }
    return false;
}
function clearEquationDisplay(){
    const eqDisplay = document.querySelector(".equation");
    eqDisplay.textContent = "";
    return true;
}