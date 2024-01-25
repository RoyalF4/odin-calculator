let firstNumber;
let secondNumber;
let operator;
let displayValue;
let numberLength = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return Number((num1 / num2).toFixed(10));
}

function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case '+':
            return add(firstNumber,secondNumber);
        case '-':
            return subtract(firstNumber,secondNumber);
        case '*':
            return multiply(firstNumber,secondNumber);
        case '/':
            return divide(firstNumber,secondNumber);
    }
}

const buttons = document.querySelectorAll('.operand');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    displayValue = '';
    numberLength = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = 0;
    display.textContent = '';
});

buttons.forEach( button => {
    button.addEventListener('click', () => {
        if(numberLength !== 12) {
            display.textContent += button.value;
            numberLength++;
        }
    });
});