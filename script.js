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

let additionalOperatorUsed = false;

let theoreticalNumber1 = "";



let display = document.querySelector(".display");

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

// ON BUTTON CLICK

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
if (((event.target.id == "=" ) && (numberToDisplay == ""))) {

}

// if AC clicked reset calculator

else if (event.target.id == "ac") {

    number1 = "";
    number2 = "";
    operator = "";
    numberToDisplay = "";

    lastInputIsOperator = false;
    operatorButtonUsedNow = false;

    display.textContent = "Display";
}

// If equals pressed when calculator is ready for calc

else if (event.target.id == "=" &&
     number1 != "") {
        number2 = numberToDisplay;
        numberToDisplay = "";

        if (number2 == "0" && operator == "/") {
            display.textContent = "I won't do it!"
        }
        else {
            numberToDisplay = operate(number1, number2, operator);
            display.textContent = numberToDisplay.toFixed(5);
            
            // Reset Calc apart from display

            numberToDisplay = "";
            number1 = "";
            number2 = "";
            operator = "";

            lastInputIsOperator = false;
            operatorButtonUsedNow = false;
            
        }
    }

else if (number2 != "" && operatorButtonUsedNow) {
    
    
    theoreticalNumber1 = operate(number1, number2, operator)
    operator = event.target.id;
    number1 = theoreticalNumber1;
    number2 = "";
    numberToDisplay = "";
    display.textContent = theoreticalNumber1;
}

// Update display after operator (second number) and get ready to store number to display to number2

else if (lastInputIsOperator && operatorButtonUsedNow == false) {

    numberToDisplay += event.target.id;
    number2 = numberToDisplay;



    display.textContent = numberToDisplay;
} 


//Display operator when pressed operator button pressed after entering number 1

else if (numberToDisplay != "" && operatorButtonUsedNow 
     && lastInputIsOperator == false) {

    lastInputIsOperator = true
    operator = event.target.id;
    number1 = numberToDisplay;
    numberToDisplay = "";
    display.textContent = event.target.id;
    
}

// logic to update number if operator not yet pressed (i.e. inputting number1)
else if (operatorButtonUsedNow == false) {
    numberToDisplay += event.target.id;
    display.textContent = numberToDisplay;
}

})

// Calculation

function operate(number1, number2, operator) {

if (operator == "+") {
    return addition(Number(number1), Number(number2))
}
else if (operator == "-") {
    return subtraction(Number(number1), Number(number2))
}
else if (operator == "*") {
    return multiplication(Number(number1), Number(number2))
}

else if (operator == "/") {
    return division(Number(number1), Number(number2))
}


}