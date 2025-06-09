const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;


let number1 = "";
let number2 = "";
let operator = "";
let numberToDisplay = "";
let operatorUsed = false;


let display = document.querySelector(".display");

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }




if (((event.target.id == "=" ) && (!operatorUsed || numberToDisplay == ""))) {

}

else if (event.target.id == "ac") {

    number1 = "";
    number2 = "";
    operator = "";
    numberToDisplay = "";
    operatorUsed = false;
    display.textContent = "Display";
}

else {

if (event.target.id == "=" &&
    operatorUsed && number1 != "") {
        number2 = numberToDisplay;
        numberToDisplay = "";

        // if divide by 0 snarky comment

        if (number2 == "0" && operator == "/") {
            display.textContent = "I won't do it!"
        }
        else {
            numberToDisplay = operate(number1, number2, operator);
        }
        display.textContent = numberToDisplay.toFixed(5);
        numberToDisplay = "";
    }

else if (operatorUsed) {
    numberToDisplay += event.target.id;
    display.textContent = numberToDisplay;
} 


if (numberToDisplay != "" && (
   event.target.id == "+" 
|| event.target.id == "-"
|| event.target.id == "/"
|| event.target.id == "*") &&
   operatorUsed == false) {

    operatorUsed = true;
    operator = event.target.id;
    number1 = numberToDisplay;
    numberToDisplay = "";
    display.textContent = event.target.id;
    
}
else if (operator == "") {
    numberToDisplay += event.target.id;
display.textContent = numberToDisplay;
}
}
})

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