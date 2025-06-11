// Calculation logic
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;


let number1 = "";
let number2 = "";
let operator = "";
let numberToDisplay = "";

let lastInputIsOperator = false;
let operatorButtonUsedNow = false;

let equalsPressed = false;

let workingOnNumber1 = false;
let workingOnNumber2 = false;



let display = document.querySelector(".display");

const wrapper = document.querySelector('#wrapper');

//Define All Buttons
const buttonFor0 = document.getElementById("0");
const buttonFor1 = document.getElementById("1");
const buttonFor2 = document.getElementById("2");
const buttonFor3 = document.getElementById("3");
const buttonFor4 = document.getElementById("4");
const buttonFor5 = document.getElementById("5");
const buttonFor6 = document.getElementById("6");
const buttonFor7 = document.getElementById("7");
const buttonFor8 = document.getElementById("8");
const buttonFor9 = document.getElementById("9");
const buttonForDecimal = document.getElementById(".");

const equalsKey = document.getElementById("=");
const plusKey = document.getElementById("+");
const takeawayKey = document.getElementById("-");
const divideKey = document.getElementById("/");
const multiplyKey = document.getElementById("*");

const allClearKey = document.getElementById("ac");
const backspaceKey = document.getElementById("backspace");


document.addEventListener("keydown", (e) => {

    if (e.shiftKey) {
        switch (e.key) {
            case "Backspace":
                allClearKey.classList.add("hovered")
                setTimeout(() => {
                allClearKey.classList.remove("hovered")
            }, 1)
                allClearKey.click();
                break
            case key = "*":
                addHoverEffect()
                multiplyKey.click();
                break
            case key = "+":
                addHoverEffect()
                plusKey.click();
                break
        }
    }
    else {


    switch (e.key) {
        case key = "1":
            addHoverEffect()
            buttonFor1.click();
            break
        case key = "2":
            addHoverEffect()
            buttonFor2.click();
            break
        case key = "3":
            addHoverEffect()
            buttonFor3.click();
            break
        case key = "4":
            addHoverEffect()
            buttonFor4.click();
            break
        case key = "5":
            addHoverEffect()
            buttonFor5.click();
            break
        case key = "6":
            addHoverEffect()
            buttonFor6.click();
            break
        case key = "7":
            addHoverEffect()
            buttonFor7.click();
            break
        case key = "8":
            addHoverEffect()
            buttonFor8.click();
            break
        case key = "9":
            addHoverEffect()
            buttonFor9.click();
            break
        case key = "0":
            addHoverEffect()
            buttonFor0.click();
            break

        // Special Characters    
        case key = ".":
            addHoverEffect()
            buttonForDecimal.click();
            break
        case "Enter":
            equalsKey.classList.add("hovered")
            setTimeout(() => {
            equalsKey.classList.remove("hovered")
            }, 50)
            equalsKey.click();
            break
        case "Backspace":
            backspaceKey.classList.add("hovered")
            setTimeout(() => {
            backspaceKey.classList.remove("hovered")
            }, 50)
            backspaceKey.click();
            break

        // Non shift Operators Clicked
     
        case key = "-":
            addHoverEffect()
            takeawayKey.click();
            break
        case "x":
            multiplyKey.classList.add("hovered")
            setTimeout(() => {
            multiplyKey.classList.remove("hovered")
            }, 50)
            multiplyKey.click();
            break
        case key = "/":
            addHoverEffect()
            divideKey.click();
            break
        }
    }
})

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

// ON BUTTON CLICK

// Checks if input is an operator

if  (event.target.id == "+" 
|| event.target.id == "-"
|| event.target.id == "/"
|| event.target.id == "*") {
    operatorButtonUsedNow = true;
}
else {
    operatorButtonUsedNow = false;
}



// If equals pressed early do nothing
if ((event.target.id == "=" ) && (numberToDisplay == "" || workingOnNumber2 == false)) {

}
// Removes ability for multiple periods
else if (event.target.id == "." && display.textContent.includes(".")) {
}

// Backspace button logic
else if (event.target.id == "backspace") {

     // if equation is evaluated and clear is pressed
    if (equalsPressed && !workingOnNumber1 && !workingOnNumber2) {
        resetCalculator();
        display.textContent = "";
     }
    else if (workingOnNumber1) {    
        useBackspace();
        number1 = numberToDisplay;

    }

    else if (workingOnNumber2) {    
        useBackspace();
        number2 = numberToDisplay; }

    // if last input was an operator
    else if (lastInputIsOperator) {
        
        operator = "";
        lastInputIsOperator = false;
        display.textContent = "";
     }
}

// if AC clicked reset calculator

else if (event.target.id == "ac") {

    resetCalculator();
    display.textContent = "";
}

// If equals pressed when calculator is ready for calc

else if (event.target.id == "=" && number1 != "") {
        
        workingOnNumber2 = false;
        equalsPressed = true;
        
        number2 = numberToDisplay;
        numberToDisplay = "";
      

        if (number2 == "0" && operator == "/") {
            display.textContent = "ERROR: Division by 0";
        }
        else {
            numberToDisplay = operate(number1, number2, operator);
            
            checkIfDecimalAndDisplay();
            // Reset Calc apart from display
            resetCalculator();
            
        }
    }

// logic for multi operators 

else if (number2 != "" && operatorButtonUsedNow) {
    
    numberToDisplay = operate(number1, number2, operator);
    operator = event.target.id;
    number1 = numberToDisplay;
    number2 = "";
    checkIfDecimalAndDisplay()
    numberToDisplay = "";
}

// Update display after operator (second number) and get ready to store number to display to number2

else if (lastInputIsOperator && operatorButtonUsedNow == false) {
    
    workingOnNumber2 = true;
    numberToDisplay += event.target.id;
    number2 = numberToDisplay;
    display.textContent = numberToDisplay;
} 


//Display operator when pressed operator button pressed after entering number 1

else if (numberToDisplay != "" && operatorButtonUsedNow 
     && lastInputIsOperator == false) {
    workingOnNumber1 = false;
    lastInputIsOperator = true;
    operator = event.target.id;
    number1 = numberToDisplay;
    numberToDisplay = "";
    display.textContent = event.target.id;
    
}

// logic to update number if operator not yet pressed (i.e. inputting number1)
else if (operatorButtonUsedNow == false) {
    workingOnNumber1 = true;
    numberToDisplay += event.target.id;
    display.textContent = numberToDisplay;
}

})
// Calculation
function operate(number1, number2, operator) {

if (operator == "+") {
    return addition(Number(number1), Number(number2));
}
else if (operator == "-") {
    return subtraction(Number(number1), Number(number2));
}
else if (operator == "*") {
    return multiplication(Number(number1), Number(number2));
}

else if (operator == "/") {
    return division(Number(number1), Number(number2));
}
}
function resetCalculator() {
            numberToDisplay = "";
            number1 = "";
            number2 = "";
            operator = "";
            numberToDisplay = "";
            lastInputIsOperator = false;
            operatorButtonUsedNow = false;
            workingOnNumber1 = false;
            workingOnNumber2 = false;
}
function useBackspace() {
     let backSpacedDisplay = display.textContent.substring(0, display.textContent.length - 1);
        numberToDisplay = backSpacedDisplay;
        display.textContent = numberToDisplay;
}
function checkIfDecimalAndDisplay() {
    if (numberToDisplay % 1 == 0) {
        display.textContent = numberToDisplay;
    }
    else {
        display.textContent = numberToDisplay.toFixed(5);
    }
}
function addHoverEffect() {
       
        document.getElementById(key).classList.add("hovered")
        setTimeout(() => {
        document.getElementById(key).classList.remove("hovered")
            }, 50)
}