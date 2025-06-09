const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;


let number1 = "";
let number2 = "";
let operator = "";
let numberToDisplay = "";
let operatorUsed = false;
let secondNumberToDisplay = "";

let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

// buttons.foreach().addEventListener("click", (event) => {
//     let target = event.target;

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

if ((event.target.id == "add" || event.target.id == "takeaway"
|| event.target.id == "divide"|| event.target.id == "multiply")
&& operatorUsed == false) {
    
    operatorUsed = true;
    operator = event.target.id;
    number1 = numberToDisplay;
    }
 else {
    numberToDisplay += event.target.id;
    display.textContent = numberToDisplay;
 }

if (number1 != "" && operatorUsed == true) {
    display.textContent = ""
    secondNumberToDisplay += event.target.id;
    display.textContent = secondNumberToDisplay;
}



if ((event.target.id == "add" || event.target.id == "takeaway"
|| event.target.id == "divide"|| event.target.id == "multiply")
&& operatorUsed == true) {

    //do calculations, send number to number 1 and restart
    // calculators for number 2

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