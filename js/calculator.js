displayInputs = [];
previousInput = 0;
result = [];

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
        operate("add",previousInput);
        console.log("previous input: " + previousInput);
    }
    //subBtn.onclick = operate(subtract,a,b);
    //multBtn.onclick = operate(multiply,a,b);
    //divBtn.onclick = operate(divide,a,b);
    clearBtn.onclick = () => {
        clearDisplay();
        clearHistory();
    }
}

function updateDisplay(){
    const history = document.querySelector(".history");
    const display = document.querySelector(".display");
    // If previous input exists. Display on screen
    if(previousInput > 0){
        history.textContent = previousInput;
    }
    // If the first input is not 0, update the display content.
    if(displayInputs[0] != "0") {
        display.textContent = displayInputs.join("");
        return true;
    }

    // If first input is 0, remove from array.
    displayInputs.shift();
}


function clearDisplay(){
    const display = document.querySelector(".display");
    display.textContent = "0";
    if(displayInputs.length > 0){
        displayInputs.splice(0);
        return true;
    }
    return false;
    
}

function clearHistory(){
    const history = document.querySelector(".history");
    history.textContent = "";
    previousInput = 0;
    return true;
}

function operate(operator,previousInput){
    if(operator == "add"){
        storeInput();
        clearDisplay()
        updateDisplay();
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
// Arithmetic helper functions
function add(a,b){return a+b;}
function subtract(a,b){return a -b;}
function multiply(a,b){return a * b;}
function divide(a,b){return a / b;}
// General functions
function storeInput(){return previousInput += parseInt(displayInputs.join(""),10);}
start();