function calculator(){
    let currInput = [];
    let previousInput = [];
    let result = 0;
    let operator = "";
    // Select operator buttons
    const addBtn = document.querySelector('.add');
    const subBtn = document.querySelector('.sub');
    const multBtn = document.querySelector('.mult');
    const divBtn = document.querySelector('.divide');
    const clearBtn = document.querySelector('.clear');
    const equalsBtn = document.querySelector(".equals");
    // Assign functions
    createNumberPad(currInput);
    addBtn.onclick = () => {
        // Assign current operator to addition
        operator = '+';
        // if a previous input exists. we want to simply display the result of adding both numbers.
        console.log(previousInput.length);
        if(previousInput.length > 0)
        {
            result = operate(operator,currInput,previousInput);
            showResult(result);
            return true;
        }
        // When add button clicked, store the current input into previous input array.
        storeLastInput(previousInput,currInput.join(""));
        updateEquationDisplay(previousInput);
        clearCurrentInput(currInput);
        console.log("previous input: " + previousInput);
    }
    //subBtn.onclick = operate(subtract,a,b);
    //multBtn.onclick = operate(multiply,a,b);
    //divBtn.onclick = operate(divide,a,b);
    clearBtn.onclick = () => {
        clearDisplay();
    }
    equalsBtn.onclick = () => {
        result = operate(operator,previousInput,currInput);
        clearEquationDisplay()
        showResult(result);
    }
}
function createNumberPad(currInput){
    // Select button div container
    const buttonDiv = document.querySelectorAll(".button");
    console.log(buttonDiv);
    buttonDiv.forEach((button) => button.addEventListener('click', () => {
        currInput.push(button.textContent);
        updateInputDisplay(currInput);
        console.log("Current input: " + currInput);
    }))
}
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
function operate(operator,currentInput,previousInput){
    if(operator == "+"){
        let result = add(
            parseInt(currentInput.join(""),10),
            parseInt(previousInput.join(""),10)
        );
        console.log("Final result: " + result);
        return result;
    }
    /*
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
    }*/
}
calculator();