displayInputs = [];
previousInput = 0;
result = 0;

function start(){
    createNumberPad();
    operatorBtns();
}
function createNumberPad(){
    // Select button div container
    const buttonDiv = document.querySelector(".numbers");
    // Create 10 numbers 0-9
    for(let i = 0; i < 10; i++){
        let button = document.createElement("button");
        // button properties
        button.textContent = i;
        button.type = "button";
        // button functions
        button.onclick = () => {
            displayInputs.push(parseInt(button.textContent,10));
            updateDisplay();
            console.log(displayInputs);
        };
        // append button to div container
        buttonDiv.appendChild(button);
    }
}
function operatorBtns(){
    // Select operator buttons
    let addBtn = document.querySelector('.add');
    let subBtn = document.querySelector('.sub');
    let multBtn = document.querySelector('.mult');
    let divBtn = document.querySelector('.divide');
    let clearBtn = document.querySelector('.clear');
    // Assign functions
    addBtn.onclick = () => {
        storeInput();
        clearDisplay()
        console.log(previousInput);
    }
    //subBtn.onclick = operate(subtract,a,b);
    //multBtn.onclick = operate(multiply,a,b);
    //divBtn.onclick = operate(divide,a,b);
    clearBtn.onclick = clearDisplay();
}

function updateDisplay(){
    const display = document.querySelector(".display");
    // Only update display if array is adding positive integers
    if(displayInputs[0] != "0") {
        display.textContent = displayInputs.join("");
        return true;
    }
    // If first element is 0, dont want to keep in array.
    displayInputs.shift();
}

function storeInput(){previousInput = parseInt(displayInputs.join(""),10);}
function clearDisplay(){
    const display = document.querySelector(".display");
    display.textContent = "0";
    return true;
}

function operate(operator,previousInput){
    if(operator == add){
        return add(a,b);
    }
    else if(operator == subtract){
        return subtract(a,b);
    }
    else if(operator == multiply){
        return multiply(a,b);
    }
    else if(operator == divide){
        return divide(a,b);
    }
    else{
        return false;
    }
}

function add(a,b){return a+b;}
function subtract(a,b){return a -b;}
function multiply(a,b){return a * b;}
function divide(a,b){return a / b;}

start();